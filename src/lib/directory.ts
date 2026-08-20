import { listingDoctors } from "@/content/doctors";
import { listingHospitals } from "@/content/hospitals";

export function doctorSpecialty(role: string) {
  return role.split(",")[0]?.trim() || role;
}

export function doctorFilterValues() {
  return {
    departments: [...new Set(listingDoctors.map((d) => doctorSpecialty(d.role)))],
    locations: [...new Set(listingDoctors.map((d) => d.location))],
  };
}

export function hospitalFilterValues() {
  return {
    locations: [...new Set(listingHospitals.map((h) => h.city))],
  };
}

export function filterDoctors(query: string, department: string, location: string) {
  const q = query.trim().toLowerCase();
  return listingDoctors.filter((d) => {
    const hay = `${d.title} ${d.role} ${d.location}`.toLowerCase();
    const matchQ = !q || hay.includes(q);
    const matchDept = !department || doctorSpecialty(d.role) === department;
    const matchLoc = !location || d.location === location;
    return matchQ && matchDept && matchLoc;
  });
}

export function filterHospitals(query: string, location: string) {
  const q = query.trim().toLowerCase();
  return listingHospitals.filter((h) => {
    const hay = `${h.title} ${h.city} ${h.stats}`.toLowerCase();
    const matchQ = !q || hay.includes(q);
    const matchLoc = !location || h.city === location;
    return matchQ && matchLoc;
  });
}
