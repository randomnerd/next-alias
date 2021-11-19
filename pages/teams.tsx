import React from 'react'
import Button from 'semantic-ui-react/dist/commonjs/elements/Button'
import Input from 'semantic-ui-react/dist/commonjs/elements/Input'
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon'
import Card from 'semantic-ui-react/dist/commonjs/views/Card'
import { useList, useStore, useStoreMap } from 'effector-react'
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
// import { withStart } from "effector-next";
// import { pageLoaded } from "../models";
// const enhance = withStart(pageLoaded as any);

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
    const teams = useList($teamNames, (name: string) => <TeamView teamName={name} />)
    return (
        <Card.Group itemsPerRow={2}>
            {teams}
        </Card.Group>
    )
}

const NewTeamInput = () => {
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
