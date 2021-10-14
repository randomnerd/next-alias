import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { withStart } from "effector-next";
import { pageLoaded } from "../models";
const enhance = withStart(pageLoaded as any);
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

const Home: NextPage = () => {
    return (
                <Button.Group vertical fluid>
                    <Link href="/newgame">
                        <Button primary className={styles.Button}>New game</Button>
                    </Link>
                    <Link href="/teams">
                        <Button className={styles.Button}>Teams</Button>
                    </Link>
                    <Link href="/words">
                        <Button className={styles.Button}>Words &amp; categories</Button>
                    </Link>
                </Button.Group>
    );
};

export default enhance(Home);
