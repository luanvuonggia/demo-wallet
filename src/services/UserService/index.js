import { fetchAPI } from '../../utils/fetch';


export async function getAvatar(name) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `avatar url ${name}`;
}