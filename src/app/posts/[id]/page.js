import pg from "pg";

export  default async function Post({ params }) {
    const db = new pg.Pool({
        connectionString: process.eventNames.DB_URL,
    });

    const post = (await db.query(`SELECT * FROM posts WHERE id = ${params.id};`))
    .rows;

    return (
        <div>
            {post.map((post) => (
                <div key={post.id}>
                    <h2 >{post.title}</h2>
                    <p>{post.content}</p>
                    </div>
            ))}
        </div>
    )
}