import { useList, useStore } from 'effector-react'
import React from 'react';
import { PlusSquare, X } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import InputGroup from 'react-bootstrap/InputGroup';

// import 'semantic-ui-css/components/Form.label.css'
// import 'semantic-ui-css/components/card.css'
// import 'semantic-ui-css/components/icon.css'
// import 'semantic-ui-css/components/button.css'
// import 'semantic-ui-css/components/input.css'
// import '../css/categories.css'
import {
    $categoryInput,
    categoryApi,
    categoryInputApi,
    changeCategoryInput,
    useCategory,
    $categoryNames
} from '../stores/categories'
import {
    useWord,
    wordApi,
    $wordValues,
    $wordInput,
    wordInputApi,
    changeWordInput
} from '../stores/words'

const WordView = ({ wordValue }: any) => {
    const word = useWord(wordValue)
    if (!word) return (<div></div>)
    return (
        <Form.Label>
            {word.value}
            <X name='close' onClick={() => wordApi.removeWord(word.value)} />
        </Form.Label>
    )
}

const WordListView = ({ categoryName }: any) => {
    const words = useList($wordValues, value => <WordView wordValue={value} />)
    return (
        <div>{words}</div>
    )
}

const NewCategoryInput = () => {
    const categoryInputValue = useStore($categoryInput)
    const addCategory = () => {
        categoryApi.create(categoryInputValue)
        categoryInputApi.setValue('')
    }
    const addCategoryIcon = <PlusSquare name='add' onClick={addCategory}/>
    const inputKeyUp = (e: any) => {
        if (e.code !== "Enter") return
        addCategory()
    }
    return (
        <InputGroup>
            <Form.Control
                size="lg"
                type="text"
                placeholder='Name a new category...'
                onKeyUp={inputKeyUp}
                onChange={changeCategoryInput}
                value={categoryInputValue}
            />
            <Button>{addCategoryIcon}</Button>
        </InputGroup>
    )
}

const NewWordInput = () => {
    const wordInputValue = useStore($wordInput)
    const addWord = () => {
        wordApi.create(wordInputValue)
        wordInputApi.setValue('')
    }
    const addWordIcon = <PlusSquare name='add' onClick={addWord}/>
    const inputKeyUp = (e: any) => {
        if (e.code !== "Enter") return
        addWord()
    }
    return (
        <InputGroup>
            <Form.Control
                size="lg"
                type="text"
                placeholder='Name a new word...'
                onKeyUp={inputKeyUp}
                onChange={changeWordInput}
                value={wordInputValue}
            />
            <Button>{addWordIcon}</Button>
        </InputGroup>
    )
}

const CategoryView = ({ categoryName }: any) => {
    const category = useCategory(categoryName)
    if (!category) return (<div></div>)
    return (
        <Card>
                <Card.Header>
                    {category.name}
                    <Button
                        onClick={() => categoryApi.removeCategory(category.name)}
                    >&times;</Button>
                </Card.Header>
                <Card.Body>
                    Games: {category.games}<br/>
                    Guesses: {category.guesses}<br/>
                    Declines: {category.declines}<br/>
                </Card.Body>
                <Card.Footer>
                    <WordListView category={category} />
                    <NewWordInput />
                </Card.Footer>
        </Card>
    )
}

const CategoryListView = () => (
    <CardGroup>
        { useList($categoryNames, name => <CategoryView categoryName={name} />) }
    </CardGroup>
)

const Categories = () => (
    <div className="Categories">
        <NewCategoryInput />
        <CategoryListView />
    </div>
)

export default Categories
