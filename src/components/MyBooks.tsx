import { useEffect } from "react"
import { Container, Col, Card, Button, Row } from "react-bootstrap"
import { Welcome, Result } from "./types"
import { useState } from "react"
const MyBooks = function () {
  const URL = "https://api.spaceflightnewsapi.net/v4/articles"
  const [books, setBooks] = useState<Result[]>([])

  useEffect(() => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore ")
        }
      })
      .then((data: Welcome) => {
        console.log(data)
        setBooks(data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Container className="mb-3">
        <Row className="g-4">
          {books.map((article) => (
            <Col key={article.id} xs={12} md={5} lg={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src={article.image_url}
                  alt={article.title}
                />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.summary}</Card.Text>

                  <Card.Text>{article.news_site}</Card.Text>
                  <Button
                    variant="primary"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leggi di più
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
export default MyBooks
