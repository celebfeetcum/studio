
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
 * Logs the provided IP address and user agent on the server.
 * IMPORTANT: This is a basic example logging to the console.
 * In a real application, you would replace console.log with logging to a
 * database, a dedicated logging service, or a file.
 *
 * Be mindful of privacy regulations (like GDPR, CCPA) when logging user data.
 * Ensure you have a legitimate basis for collecting and storing this information.
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

  console.log("--- IP Check Log ---");
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log(`IP Address: ${ip ?? 'N/A'}`);
  console.log(`User Agent: ${userAgent ?? 'N/A'}`);
  console.log("--------------------");

  // In a real app, replace console.log with database insertion or logging service call
  // e.g., await db.collection('ip_logs').insertOne({ ip, userAgent, timestamp: new Date() });

  // Simulating success
  return { success: true };
}
