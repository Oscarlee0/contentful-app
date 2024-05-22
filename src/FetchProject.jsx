import { createClient } from "contentful";
import { useEffect, useState } from "react";

// using custom hook to get my data in contentful cms.
const client = createClient({
  space: "4cqztccdjdes",
  environment: "master", // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const resp = await client.getEntries({ content_type: "projects" });
      const projects = resp.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { img, title, url, id };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
