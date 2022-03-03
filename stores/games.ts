import { persist } from 'effector-storage/local'
import { createStore, createApi } from 'effector'
import { Team } from './teams';
import { Category } from './categories';
import { v4 as uuid } from 'uuid'

export interface Games {
    [id: string]: Game
}

export enum GameStatus {
    SETUP = 'SETUP',
    RUNNING = 'RUNNING',
    FINISHED = 'FINISHED',
    PAUSED = 'PAUSED',
}

export interface Game {
    id: string
    status: GameStatus
    params: GameParams
}

export interface GameParams {
    teams: Team[]
    wordsToWin: number
    roundTime: number
    penaltyForSkip: boolean
    wordCategory: Category
}

export interface GameResult {

}
export const createGame = (params: GameParams) => ({
    id: uuid(),
    status: GameStatus.SETUP,
    params: { ...params },
})
export const $games = createStore<Games>({})
export const gameApi = createApi($games, {
    create(state: Games, params: GameParams) {
        const game = {
            id: uuid(),
            status: GameStatus.SETUP,
            params: { ...params },
        }
    }
})