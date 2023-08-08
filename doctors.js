export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@example.com",
    clinic: {
      name: "City Medical Center",
      address: {
        city: "Los Angeles",
        street: "Main Street",
        building: 456,
        floor: 3,
      },
    },
    experience: "15 years",
    rate: 4.9,
    specialisation: "Dermatologist",
    price_for_visit: 200,
    additional_services: [
      {
        service: "Skin Allergy Testing",
        price: 50,
      },
      {
        service: "Laser Treatment",
        price: 100,
      },
    ],
    additional_specialisations: ["Cosmetic Dermatology"],
    disease_tags: ["Acne", "Psoriasis"],
    workingSchedule: ["Sn", "Mn", "Fr", "St"],
  },
  {
    id: 2,
    name: "Dr. Michael Lee",
    email: "michael.lee@example.com",
    clinic: {
      name: "Healthy Life Clinic",
      address: {
        city: "Chicago",
        street: "Oak Street",
        building: 789,
        floor: 2,
      },
    },
    experience: "12 years",
    rate: 4.7,
    specialisation: "Orthopedic Surgeon",
    price_for_visit: 250,
    additional_services: [
      {
        service: "Joint Replacement",
        price: 150,
      },
      {
        service: "Fracture Care",
        price: 100,
      },
    ],
    additional_specialisations: ["Sports Medicine"],
    disease_tags: ["Arthritis", "Sports Injuries"],
    workingSchedule: ["Sn", "Mn", "Fr", "St"],
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    email: "emily.williams@example.com",
    clinic: {
      name: "Sunshine Pediatrics",
      address: {
        city: "Miami",
        street: "Palm Avenue",
        building: 123,
        floor: 1,
      },
    },
    experience: "8 years",
    rate: 4.8,
    specialisation: "Pediatrician",
    price_for_visit: 150,
    additional_services: [
      {
        service: "Vaccinations",
        price: 30,
      },
      {
        service: "Wellness Checkup",
        price: 60,
      },
    ],
    additional_specialisations: ["Neonatology"],
    disease_tags: ["Childhood Infections", "Developmental Disorders"],
    workingSchedule: ["Sn", "Mn", "Fr", "St"],
  },
  {
    id: 4,
    name: "Dr. Robert Anderson",
    email: "robert.anderson@example.com",
    clinic: {
      name: "Eyesight Care Clinic",
      address: {
        city: "Seattle",
        street: "Vision Street",
        building: 567,
        floor: 4,
      },
    },
    experience: "18 years",
    rate: 4.9,
    specialisation: "Ophthalmologist",
    price_for_visit: 180,
    additional_services: [
      {
        service: "Cataract Surgery",
        price: 100,
      },
      {
        service: "Laser Vision Correction",
        price: 150,
      },
    ],
    additional_specialisations: ["Retina Specialist"],
    disease_tags: ["Glaucoma", "Retinal Diseases"],
    workingSchedule: ["Sn", "Mn", "Fr", "St"],
  },
  {
    id: 5,
    name: "Dr. David Martin",
    email: "david.martin@example.com",
    clinic: {
      name: "Heartbeat Cardiology",
      address: {
        city: "Houston",
        street: "Pulse Avenue",
        building: 234,
        floor: 2,
      },
    },
    experience: "20 years",
    rate: 4.9,
    specialisation: "Cardiologist",
    price_for_visit: 300,
    additional_services: [
      {
        service: "Cardiac Stress Test",
        price: 100,
      },
      {
        service: "Echocardiography",
        price: 150,
      },
    ],
    additional_specialisations: ["Interventional Cardiology"],
    disease_tags: ["Heart Disease", "Hypertension"],
    workingSchedule: ["Sn", "Mn", "Fr", "St"],
  },
];
