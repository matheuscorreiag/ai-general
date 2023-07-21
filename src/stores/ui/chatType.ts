import { writable } from 'svelte/store';

export enum ChatType {
	Conversation = 'conversation',
	Image = 'image',
	Song = 'song'
}

export const chatType = writable<ChatType | null>(null);
