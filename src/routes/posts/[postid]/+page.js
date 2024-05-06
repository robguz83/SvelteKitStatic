export const load = async (loadEvent) => {
    const { fetch, params } = loadEvent;
    const { postid } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
    const post = await response.json();
    console.log("POST: \n",post);
    return {
        post,
    };
};