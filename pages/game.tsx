import 'semantic-ui-css/components/card.min.css'
import 'semantic-ui-css/components/label.min.css'
import 'semantic-ui-css/components/input.min.css'
import type { NextPage } from 'next';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Card from 'semantic-ui-react/dist/commonjs/views/Card'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'
import Label from 'semantic-ui-react/dist/commonjs/elements/Label'

const Game: NextPage = () => (
    <Card textAlign="center" fluid>
        <Card.Content>
            <Card.Header>
                Player name
            </Card.Header>
            <Card.Description>
                WORD
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button.Group fluid>
            <Button basic color="red" icon="close" content="SKIP"/>
            <Button basic color="green" icon="close" content="GUESSED"/>
            </Button.Group>
        </Card.Content>
    </Card>
);

export default Game;
