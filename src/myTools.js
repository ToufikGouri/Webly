import { createClient } from "contentful"

const client = createClient({
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID
})

const getBlogByTag = (data, tag) => {
    return data.filter(val =>
        val.metadata.tags.some(val => val.sys.id == tag)
    )
}

const getBlogById = async (id) => {
    return await client.getEntry(id)
        .then(val => val.fields)
}

const generateUrlSlug = (title = "404", id = "") => {
    return title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')   // Remove special characters
        .replace(/\s+/g, '-')           // Replace spaces with hyphens
        .concat("-", id)                // concat id at end as xyz-id
}

export {
    client,
    getBlogByTag,
    getBlogById,
    generateUrlSlug
}