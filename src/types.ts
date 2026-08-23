export interface Release {
  id: string;
  title: string;
  year: string;
  type: 'Album' | 'EP' | 'Single';
  embedUrl: string;
  spotifyUrl: string;
  coverColor: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  bgColor: string;
  customUrl?: string;
  aspectRatio?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  inquiryType: 'Booking' | 'Press / PR' | 'Collaboration' | 'General';
  eventDate?: string;
  location?: string;
  message: string;
}

export interface PreLaunchChecklist {
  bioUpdated: boolean;
  heroPhotoUpdated: boolean;
  galleryPhotosUpdated: boolean;
  contactEmailSet: boolean;
  spotifyVerified: boolean;
}
