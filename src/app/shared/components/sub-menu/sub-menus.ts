export interface SubMenuMap {
  [key: string]: SubMenu;
}

export interface SubMenu {
  // Submenu main title
  title: string;
  // Top level url for the submenu page
  path: string;
  main: Array<SubMenuItem>;
  secondary?: Array<SubMenuItem>;
}

export interface SubMenuItem {
  text: string;
  url: string;
}

export const SUB_MENUS: SubMenuMap = {
  dashboard: {
    title: 'Home Dashboard',
    path: '/dashboard/home',
    main: [],
    secondary: [],
  },
  users: {
    title: 'Users',
    path: '/dashboard/user',
    main: [
      {
        text: 'Members',
        url: 'user/members',
      },
      {
        text: 'Streamers',
        url: 'user/streamers',
      },
      {
        text: 'Featured Models',
        url: 'user/featured-models',
      },
      {
        text: 'Physical Goods',
        url: 'user/physical-goods',
      },
      {
        text: 'User Stats',
        url: 'user/user-stats',
      },
    ],
    secondary: [
      {
        text: 'User Permissions',
        url: 'roles',
      },
    ],
  },
  roles: {
    title: 'Users',
    path: '/dashboard/roles',
    main: [
      {
        text: 'Members',
        url: 'user/members',
      },
      {
        text: 'Streamers',
        url: 'user/streamers',
      },
      {
        text: 'Featured Models',
        url: 'user/featured-models',
      },
      {
        text: 'Physical Goods',
        url: 'user/physical-goods',
      },
      {
        text: 'User Stats',
        url: 'user/user-stats',
      },
    ],
    secondary: [
      {
        text: 'User Permissions',
        url: 'roles',
      },
    ],
  },
  verification: {
    title: 'Verification',
    path: '/dashboard/verifications',
    main: [
      {
        text: 'Streamer Avatar',
        url: 'verifications/streamer-avatar',
      },
      {
        text: 'Profile Banners',
        url: 'verifications/profile-banners',
      },
      {
        text: 'Payment Settings',
        url: 'verifications/payment-settings',
      },
    ],
  },
  archives: {
    title: 'Archives',
    path: '/dashboard/archives',
    main: [
      {
        text: 'Live Thumbnail Archive',
        url: '/dashboard/archives/liveThumbnails',
      },
      {
        text: 'Recordings',
        url: '/dashboard/archives/recordings',
      },
      {
        text: 'Chats',
        url: '/dashboard/archives/chats',
      },
    ],
    secondary: [],
  },
};
