import { useEffect, useState } from "react"
import { Result, Welcome } from "./types"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const MyDetails = function () {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles/"
  const [article, setArticle] = useState<Result[]>([])
  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore")
        }
      })
      .then((data: Welcome) => {
        setArticle(data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      {article.map((author, i) => (
        <Card key={i}>
          <Card.Img variant="top" src={author.image_url} />
          <Card.Body>
            <Card.Title>{author.title}</Card.Title>
            <Card.Text>{author.summary}</Card.Text>
            <Card.Text>{author.news_site}</Card.Text>
            <Link className="ms-2" to={`/`}>
              <Button>altri articoli</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
export default MyDetails
