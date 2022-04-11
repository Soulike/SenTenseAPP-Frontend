import {BACKEND_ADDRESS} from './CONFIG.js';

/**
 * @param {string} text
 * @returns {Promise<{code: number, result: string}>>}
 * @throws - Throws Error if encountering network issue
 */
export async function postSentence(text)
{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const response = await fetch(BACKEND_ADDRESS, {
        method: 'POST',
        body: JSON.stringify({text}),
        headers,
    });

    if (!response.ok)
    {
        throw new Error(response.statusText);
    }
    else
    {
        return await response.json();
    }
}