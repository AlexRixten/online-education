import { ERoutes } from "../enums/routes.enum";
import { ETags } from "../enums/tags.enum";

export const NAV_LINK = [
  {
	id: 1,
	title: "About Us",
	path: ERoutes.AboutUs
  },
  {
	id: 2,
	title: "Courses",
	path: ERoutes.Courses
  },
  {
	id: 3,
	title: "Blogs",
	path: ERoutes.Blogs
  },
  {
	id: 4,
	title: "Events",
	path: ERoutes.Events
  },
  {
	id: 5,
	title: "Contacts",
	path: ERoutes.Contacts
  }
];

export const SOCIAL_LINK = [
  {
	id: 1,
	title: "facebook",
	path: ERoutes.AboutUs
  },
  {
	id: 2,
	title: "twitter",
	path: ERoutes.Courses
  },
  {
	id: 3,
	title: "youtube",
	path: ERoutes.Events
  },
  {
	id: 4,
	title: "telegram",
	path: ERoutes.Blogs
  },
  {
	id: 5,
	title: "instagram",
	path: ERoutes.Contacts
  },
  {
	id: 6,
	title: "linkedin",
	path: ERoutes.Contacts
  }
];

export const COURSES = [
  {
	id: 1,
	title: "Marketing",
	path: ERoutes.AboutUs
  },
  {
	id: 2,
	title: "Management",
	path: ERoutes.Courses
  },
  {
	id: 3,
	title: "HR & Recruting",
	path: ERoutes.Events
  },
  {
	id: 4,
	title: "Design",
	path: ERoutes.Blogs
  },
  {
	id: 5,
	title: "Development",
	path: ERoutes.Contacts
  }
];

export const CONTACT_US = [
  {
	id: 1,
	title: "(405) 555-0128",
	path: "tel:4055550128"
  },
  {
	id: 2,
	title: "hello@createx.com",
	path: "mailto:hello@createx.com"
  }
];

export const CATEGORY_EVENTS = [
  { value: '1', label: 'All Theme' },
  { value: '2', label: 'Online master-class' },
  { value: '3', label: 'Online lecture' },
  { value: '4', label: 'Online workshop' }
]

export const SORT_EVENTS = [
  { value: 'asc', label: 'newest' },
  { value: 'desc', label: 'oldest' },
]

export const TAGS = [
	{
		id:1,
		title: ETags.ALL,
	},
	{
		id:2,
		title: ETags.MARKETING,
	},
	{
		id:3,
		title: ETags.RECRUTING,
	},
	{
		id:4,
		title: ETags.DESIGN,
	},
	{
		id:5,
		title: ETags.DEVELOPMENT,
	},
	{
		id:6,
		title: ETags.MANAGEMENT,
	},
]