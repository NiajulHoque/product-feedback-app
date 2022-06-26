import { atom } from "jotai";
import { Feedback } from "../models/feedback/feedback.model";

export const feedbacksAtom = atom<Feedback[]>([]);
