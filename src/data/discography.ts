import { Release, GalleryItem } from '../types';

export const ARTIST_NAME = 'ONEKEYZ';
export const SPOTIFY_ARTIST_URL = 'https://open.spotify.com/artist/0tYHpRamUJ3uFzF2I1jbBj?utm_source=ig&utm_medium=social&utm_content=link_in_bio';
export const SPOTIFY_ARTIST_EMBED = 'https://open.spotify.com/embed/artist/0tYHpRamUJ3uFzF2I1jbBj';
export const INSTAGRAM_URL = 'https://www.instagram.com/one_keyz/';
export const INSTAGRAM_HANDLE = '@one_keyz';

export const RELEASES: Release[] = [
  {
    id: 'real-2025',
    title: 'Real',
    year: '2025',
    type: 'Single',
    embedUrl: 'https://open.spotify.com/embed/album/78lu4WSbmRbb7BWck0a5OK',
    spotifyUrl: 'https://open.spotify.com/album/78lu4WSbmRbb7BWck0a5OK',
    coverColor: '#E6007E',
    description: 'Latest single release from ONEKEYZ featuring soulful melodies and raw vocal delivery.'
  },
  {
    id: 'come-2021',
    title: 'Come',
    year: '2021',
    type: 'Single',
    embedUrl: 'https://open.spotify.com/embed/album/1USTV0CvktdEE5ifdynaR9',
    spotifyUrl: 'https://open.spotify.com/album/1USTV0CvktdEE5ifdynaR9',
    coverColor: '#121212',
    description: 'A captivating track showcasing emotional songwriting and hypnotic atmosphere.'
  },
  {
    id: 'poison-2018',
    title: 'Poison',
    year: '2018',
    type: 'Single',
    embedUrl: 'https://open.spotify.com/embed/album/1C51X0BDJx6GlTGzgRubVg',
    spotifyUrl: 'https://open.spotify.com/album/1C51X0BDJx6GlTGzgRubVg',
    coverColor: '#DB2777',
    description: 'Breakthrough single with signature vocals, haunting synth textures, and smooth R&B rhythm.'
  }
];

export const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', title: 'Editorial Look 01', bgColor: 'from-[#E6007E] to-[#DB2777]', aspectRatio: 'aspect-[3/4]' },
  { id: '2', title: 'Stage & Performance', bgColor: 'from-[#121212] to-[#27272a]', aspectRatio: 'aspect-square' },
  { id: '3', title: 'Studio Session', bgColor: 'from-[#E6007E]/80 to-[#121212]', aspectRatio: 'aspect-[4/5]' },
  { id: '4', title: 'Press Portrait', bgColor: 'from-[#27272a] to-[#E6007E]', aspectRatio: 'aspect-[3/4]' },
  { id: '5', title: 'Behind The Scenes', bgColor: 'from-[#DB2777] to-[#831843]', aspectRatio: 'aspect-square' },
  { id: '6', title: 'Live Showcase', bgColor: 'from-[#18181b] to-[#DB2777]', aspectRatio: 'aspect-[4/3]' }
];
