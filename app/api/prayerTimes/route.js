import { connectToDB } from "@/utils/database";
import PrayerTimesModel from "../../models/prayerTimes";


const currentDate = new Date();

// Extract the day, month, and year components
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based, so we add 1
const year = currentDate.getFullYear();

// Create the formatted date string
const formattedDate = `${day}/${month}/${year}`;


export const GET = async (request) => {
    try {
        await connectToDB()

        const prayerTimes = await PrayerTimesModel.findOne({civilDate:formattedDate})
console.log(prayerTimes);
        return new Response(JSON.stringify(prayerTimes), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prayerTimes", { status: 500 })
    }
} 