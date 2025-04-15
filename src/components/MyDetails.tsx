import { useEffect, useState } from "react"
import { Result } from "./types"
import { Card, Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const MyDetails = function () {
  const { id } = useParams()
  const [article, setArticle] = useState<Result | null>(null)

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore")
        }
      })
      .then((data: Result) => {
        setArticle(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <>
      {article && (
        <Card className="mb-4 shadow-sm">
          <Card.Img variant="top" src={article.image_url} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.summary}</Card.Text>
            <Card.Text>
              <strong>Fonte:</strong> {article.news_site}
            </Card.Text>
            <Link className="ms-2" to={`/`}>
              <Button>Torna agli articoli</Button>
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  )
}
export default MyDetails
