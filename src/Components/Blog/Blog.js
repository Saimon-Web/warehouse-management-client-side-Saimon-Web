import React from 'react';

const Blog = () => {
    return (
        <div className='bg-light p-5'>
            <h1>Difference between javascript and nodejs</h1>
            <p>	Javascript is a programming language that is used for writing scripts on the website. <br />
                NodeJS is a Javascript runtime environment. </p>
            <p>Javascript is basically used on the client-side. <br />	Node is mostly used on the server-side.</p>
            <p>	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br /> V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>

            <h2>Differences between SQL and NoSQL</h2>
            <p>SQL database is tables with fixed rows and columns. <br />
                NoSQL database= Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges</p>
            <p>SQL is Typically required <br /> No Sql is  Typically not required  </p>
            <p>SQL is Requires ORM (object-relational mapping). <br />
                Many do not require ORMs. MongoDB documents map directly to data structures in most popular programming languages.

            </p>

            <h2>What is the purpose of jwt and how does it work</h2>
            <p>
                In short, JWTs are used as a secure way to authenticate users and share information.

                Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.</p>
            <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
        </div>
    );
};

export default Blog;