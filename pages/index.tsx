import type { NextPage } from 'next';
import Link from 'next/link';
import { withStart } from "effector-next";
import { pageLoaded } from "../models";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const enhance = withStart(pageLoaded as any);

const Home: NextPage = () => {
    return (
                <ButtonGroup vertical>
                    <Link href="/newgame" passHref={true}>
                        <Button>New game</Button>
                    </Link>
                    <Link href="/teams" passHref={true}>
                        <Button variant="secondary">Teams</Button>
                    </Link>
                    <Link href="/words" passHref={true}>
                        <Button variant="secondary">Words &amp; categories</Button>
                    </Link>
                </ButtonGroup>
    );
};

export default enhance(Home);
