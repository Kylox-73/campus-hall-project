export interface Hall {
  id: string;
  name: string;
  capacity: number;
  location: string;
  description: string;
  images: string[];
  facilities: string[];
  isAvailable: boolean;
}

export interface Booking {
  id: string;
  hallId: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
  teacherInCharge: string;
  status: "pending" | "approved" | "rejected";
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
}
