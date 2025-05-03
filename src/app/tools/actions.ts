
'use server';

/**
 * @fileOverview Server actions for the tools page.
 * - logIpAddress: Logs IP address and user agent.
 */

import { z } from 'zod';

const LogIpInputSchema = z.object({
  ip: z.string().ip({ message: "Invalid IP address" }).or(z.null()),
  userAgent: z.string().optional(),
});

type LogIpInput = z.infer<typeof LogIpInputSchema>;

/**
 * Logs the provided IP address and user agent.
 *
 * IMPORTANT: This function currently logs to the server console.
 * For persistent storage (required for "research and leads"), you need to
 * integrate this with a database (e.g., Firestore, PostgreSQL, MongoDB).
 * Replace the console.log statements below with your database insertion logic.
 *
 * Be mindful of privacy regulations (like GDPR, CCPA) when logging and storing user data.
 * Ensure you have a legitimate basis for collecting and storing this information,
 * and implement appropriate security measures.
 *
 * !!! THIS IMPLEMENTATION DOES NOT PERFORM KEYLOGGING OR UNSOLICITED CLIPBOARD ACCESS !!!
 * It only logs the IP address and User-Agent string provided by the client.
 */
export async function logIpAddress(input: LogIpInput): Promise<{ success: boolean; message?: string }> {
  const validation = LogIpInputSchema.safeParse(input);

  if (!validation.success) {
    console.error("Invalid input for logIpAddress:", validation.error.flatten());
    return { success: false, message: "Invalid input data." };
  }

  const { ip, userAgent } = validation.data;
  const timestamp = new Date();

  // --- Database Integration Point ---
  // Replace the console logs below with your database insertion logic.
  // Example using a hypothetical 'db' object (e.g., Prisma, Firestore client):
  /*
  try {
    await db.collection('ip_logs').insertOne({
      ipAddress: ip,
      userAgent: userAgent,
      timestamp: timestamp,
    });
    console.log(`Successfully logged IP: ${ip}`);
    return { success: true };
  } catch (error) {
    console.error("Database logging failed:", error);
    return { success: false, message: "Failed to log data." };
  }
  */

  // Current implementation (logs to console only):
  console.log("--- IP Check Log (Console Only) ---");
  console.log(`Timestamp: ${timestamp.toISOString()}`);
  console.log(`IP Address: ${ip ?? 'N/A'}`);
  console.log(`User Agent: ${userAgent ?? 'N/A'}`);
  console.log("-----------------------------------");
  console.warn("IP logging is currently only outputting to the console. Implement database persistence for storage.");

  // Simulate success for now, as it logged to console.
  // Replace this with the actual result from your database operation.
  return { success: true, message: "Data logged to console (Persistence not implemented)." };
}
