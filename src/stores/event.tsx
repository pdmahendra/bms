import { makeObservable, action } from "mobx";
import axios from "../utils/middleware";
import { Root } from "./root";
import { iRoot } from "./root";

export type EventType = {
  venueAddress: {
    name: string;
    city: string;
    country: string;
    zipcode: string;
  };
  venueLocation: {
    type: string;
    coordinates: [string, string];
  };
  _id: string;
  title: string;

  organizer: {
    _id: string;
    name: string;
  };
  eventCategories: [
    {
      _id: string;
      categoryName: string;
    }
  ];
  genres: string[];
  description: string;
  slug: string;
  posterUrl: string;
  trailerUrls: [];
  timezone: string;
  eventStart: string;
  eventEnd: string;
  eventSchedule: [
    {
      startDate: string;
      endDate: string;
      startTime: string;
      endTime: string;
      byDay: [];
      byMonth: [];
      byMonthWeek: [];
      scheduleTimezone: string;
      _id: string;
    }
  ];
  eventMode: string;
  shareUrl: string;
  ageRestriction?: string;
};

export class Event {
  root: iRoot;
  liveEvents: EventType[] = [];
  upcomingEvents: EventType[] = [];
  trendingCategories: any[] = [];
  currentCity: string = "";
  nearestCity: string = "";
  constructor(root: Root) {
    makeObservable(this, {
      fetchEvents: action,
    });
    this.root = root;
  }
  async fetchEvents(lat: string, long: string) {
    try {
      const response = await axios.get(
        `https://kafsbackend.onrender.com/api/v1/events/fetch?lat=${lat}&lng=${long}`
      );
      this.liveEvents = response.data.data.liveEvents;
      this.upcomingEvents = response.data.data.upcomingEvents;
      this.trendingCategories = response.data.data.trendingCategories;
      this.currentCity = response.data.data.currentCity;
      this.nearestCity = response.data.data.nearestCity;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("API Error:", error.response?.data || error.message);
      } else {
        console.error("Unexpected Error:", error);
      }
    }
  }
}
