import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { withStart } from "effector-next";
import { pageLoaded } from "../models";
import { Button, ButtonGroup } from 'react-bootstrap';

const enhance = withStart(pageLoaded as any);

const Home: NextPage = () => {
    return (
                <ButtonGroup vertical>
                    <Link href="/newgame">
                        <Button>New game</Button>
                    </Link>
                    <Link href="/teams">
                        <Button variant="secondary">Teams</Button>
                    </Link>
                    <Link href="/words">
                        <Button variant="secondary">Words &amp; categories</Button>
                    </Link>
                </ButtonGroup>
    );
};

export default enhance(Home);
