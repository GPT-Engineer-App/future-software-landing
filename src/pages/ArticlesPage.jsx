import { Box, Heading, List, ListItem, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((response) => response.json())
      .then((data) => {
        const topTenIds = data.slice(0, 10);
        Promise.all(topTenIds.map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).then((res) => res.json()))).then((articles) => setArticles(articles));
      });
  }, []);

  return (
    <Box p={5}>
      <Heading mb={4}>Top 10 Hacker News Articles</Heading>
      <List spacing={3}>
        {articles.map((article) => (
          <ListItem key={article.id}>
            <Link href={article.url} isExternal>
              {article.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ArticlesPage;
