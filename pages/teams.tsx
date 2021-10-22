import React from 'react'
import { useList, useStore, useStoreMap } from 'effector-react'
import { PlusCircle } from 'react-bootstrap-icons'
// import 'semantic-ui-css/components/card.css'
// import 'semantic-ui-css/components/button.css'
// import 'semantic-ui-css/components/icon.css'
// import 'semantic-ui-css/components/input.css'
// import '../css/teams.css'
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
import { withStart } from "effector-next";
import { pageLoaded } from "../models";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const enhance = withStart(pageLoaded as any);

export const useTeam = (name: string) => useStoreMap({
    store: $teams,
    keys: [name],
    fn(state: TeamList, [_name]: string[]): Team | null {
        if (_name in state) return state[_name]
        return null
    },
})

const TeamView = ({ teamName }: { teamName: string }) => {
    const team = useTeam(teamName)
    return team && (
        <Card>
            <Card.Header>
                {team.name}
                <Button
                    color="red"
                    onClick={() => teamApi.removeTeam(team.name)}
                >
                    &times;
                </Button>
            </Card.Header>
            <Card.Body>
                Wins: {team.wins}
            </Card.Body>
        </Card>
    )
}

const TeamListView = () => {
    const teams = useList($teamNames, name => <TeamView teamName={name} />)
    return (
        <CardGroup>
            {teams}
        </CardGroup>
    )
}

const NewTeamInput = () => {
    const teamInputValue = useStore($teamInput)
    const addTeam = () => {
        teamApi.create(teamInputValue)
        teamInputApi.setValue('')
    }
    const addTeamIcon = <PlusCircle onClick={addTeam}/>
    const inputKeyUp = (e: any) => {
        if (e.code !== "Enter") return
        addTeam()
    }
    return (
        <InputGroup>
            <Form.Control
                size="lg"
                id='teamName'
                type="text"
                placeholder='Name a new team...'
                onKeyUp={inputKeyUp}
                onChange={changeTeamInput}
                value={teamInputValue}
            />
            <Button>{addTeamIcon}</Button>
        </InputGroup>
    )
}

const Teams = () => (
    <div className="Teams">
        <NewTeamInput />
        <TeamListView />
    </div>
)

export default enhance(Teams);
