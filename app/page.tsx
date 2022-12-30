import React from 'react';
import {readFile} from "fs/promises";

const getAllFiles = async () => {
    const file = await readFile('./app/hello.md')
    console.log(file)
    return file.toString()
}

const Home = async () => {
    const data = await getAllFiles()

    return (
        <div>
            Home page
            {data.toString()}
        </div>
    );
};

export default Home;