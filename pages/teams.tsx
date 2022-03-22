import 'semantic-ui-css/components/card.min.css'
import 'semantic-ui-css/components/input.min.css'
import React from 'react'
import Card from 'semantic-ui-react/dist/commonjs/views/Card'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import {
    teamApi,
    $teamNames,
    $teamInput,
    teamInputApi,
    changeTeamInput,
    $teams,
    Team,
    TeamList
} from '../stores/teams'

const TeamView = ({ teamName }: { teamName: string }) => {
    const { useStoreMap } = require('effector-react')
    const useTeam = (name: string) => useStoreMap({
        store: $teams,
        keys: [name],
        fn(state: TeamList, [_name]: string[]): Team | null {
            if (_name in state) return state[_name]
            return null
        },
    })
    const team = useTeam(teamName)
    return team && (
        <Card>
            <Card.Content>
                <Card.Header>
                    {team.name}
                    <Button
                        circular
                        inverted
                        size="mini"
                        color="red"
                        icon="close"
                        floated="right"
                        onClick={() => teamApi.removeTeam(team.name)}
                    />
                </Card.Header>
                <Card.Description>
                    Wins: {team.wins}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

const TeamListView = () => {
    const { useList } = require('effector-react')
    const teams = useList($teamNames, (name: string) => <TeamView teamName={name} />)
    return (
        <Card.Group itemsPerRow={2}>
            {teams}
        </Card.Group>
    )
}

const NewTeamInput = () => {
    const { useStore } = require('effector-react')
    const teamInputValue = useStore($teamInput)
    const addTeam = () => {
        teamApi.create(teamInputValue)
        teamInputApi.setValue('')
    }
    const addTeamIcon = <Icon name='add' link onClick={addTeam}/>
    const inputKeyUp = (e: any) => {
        if (e.code !== "Enter") return
        addTeam()
    }
    return (
        <Input fluid
            size="large"
            id='teamName'
            type="text"
            placeholder='Name a new team...'
            icon={addTeamIcon}
            onKeyUp={inputKeyUp}
            onChange={changeTeamInput}
            value={teamInputValue}
        />
    )
}

const Teams = () => (
    <div className="Teams">
        <NewTeamInput />
        <TeamListView />
    </div>
)

export default Teams;
