// lib/scoring.ts
import { LeadData, IntentScore } from "./types";

/**
 * Lead Scoring & Routing Logic (v2 Single-Tab Update)
 */

export function determineIntentScore(lead: LeadData): IntentScore {
  // A builder/developer looking for a mandate is always a top priority lead
  if (lead.enquiryType === 'seller-builder') {
    return 'HIGH'; 
  }

  // Site visits indicate high real-world intent
  if (lead.source === 'site-visit-form') {
    return 'HIGH';
  }

  // If we only captured minimal info from a quick popup/widget or brochure download, it's low-intent by default
  if (lead.source === 'popup' || lead.source === 'hero-quick-form' || lead.source === 'brochure-download-form' || !lead.budget || !lead.timeline) {
    return 'LOW';
  }

  // Basic Timeline Filter
  if (lead.timeline === 'Just exploring' || lead.timeline === 'More than 6 months') {
    return 'NURTURE';
  }

  // If they are ready to transact soon
  if (lead.timeline === 'Ready to buy' || lead.timeline === 'Immediate' || lead.timeline === '1-3 months') {
    return 'HIGH';
  }

  return 'LOW';
}

export function determineSheetTab(lead: LeadData, score: IntentScore): string {
  // Explicit overrides based on enquiry type or source
  if (lead.enquiryType === 'seller-builder') return 'Builder Leads';
  if (lead.enquiryType === 'land') return 'Land Leads';
  if (lead.source === 'site-visit-form') return 'Site Visit';
  if (lead.source === 'brochure-download-form') return 'Brochure Download';

  // Standard B2C buyer/investor routing
  if (lead.source === 'popup' || lead.source === 'hero-quick-form') return 'Quick Leads';
  if (score === 'HIGH') return 'Hot Leads';
  if (score === 'NURTURE') return 'Nurture';
  
  return 'Low Intent';
}