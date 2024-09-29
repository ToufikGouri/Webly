import { createClient } from "contentful"
import { createClient as createManagementClient } from "contentful-management"
import moment from "moment"

const client = createClient({
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID
})

const managementClient = createManagementClient({
    accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
})

const generateUrlSlug = (title = "404", id = "") => {
    return title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')   // Remove special characters
        .replace(/\s+/g, '-')           // Replace spaces with hyphens
        .concat("-", id)                // concat id at end as xyz-id
}

const formatDate = (date) => {
    const createdTime = moment(date)
    const now = moment()

    // Check how many days ago the date is
    const daysDifference = now.diff(createdTime, 'days');

    // Logic for displaying relative time or specific date
    const displayDate = daysDifference > 6
        ? createdTime.format('MMM Do, YYYY')  // More than 6 days ago, show the date
        : createdTime.fromNow();                // Otherwise, show relative time

    return displayDate
}

export {
    client,
    managementClient,
    generateUrlSlug,
    formatDate
}