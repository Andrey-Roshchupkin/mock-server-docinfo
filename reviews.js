export const clinicsReviews = [
  {
    clinic_id: 0,
    reviews: [
      {
        patient_id: "PATIENT001",
        phone_number: "+374-41-720001",
        date_of_review: "2023-08-16",
        date_of_visit: "2023-08-10",
        text_of_review:
          "I had a great experience at this clinic. The staff was friendly and the facilities were clean.",
        rating: 4,
      },
      {
        patient_id: "PATIENT002",
        phone_number: "+374-41-720002",
        date_of_review: "2023-08-15",
        date_of_visit: "2023-08-12",
        text_of_review:
          "I was quite satisfied with the service I received. The doctor was knowledgeable and attentive.",
        rating: 5,
      },
    ],
  },
  {
    clinic_id: 1,
    reviews: [
      {
        patient_id: "PATIENT003",
        phone_number: "+374-41-720003",
        date_of_review: "2023-08-14",
        date_of_visit: "2023-08-09",
        text_of_review:
          "I had a positive experience at this clinic. The treatment I received was effective.",
        rating: 4,
      },
    ],
  },
  {
    clinic_id: 2,
    reviews: [
      {
        patient_id: "PATIENT004",
        phone_number: "+374-41-720004",
        date_of_review: "2023-08-13",
        date_of_visit: "2023-08-11",
        text_of_review:
          "I had a disappointing experience at this clinic. The staff was not very helpful.",
        rating: 2,
      },
    ],
  },
];

export const doctorsReviews = [
  {
    doctor_id: 0,
    clinic_id: 0,
    reviews: [
      {
        patient_id: "PATIENT001",
        phone_number: "+374-41-720001",
        date_of_review: "2023-08-16",
        date_of_visit: "2023-08-10",
        text_of_review:
          "Dr. Smith was very knowledgeable and provided excellent care.",
        rating: 5,
      },
      {
        patient_id: "PATIENT002",
        phone_number: "+374-41-720002",
        date_of_review: "2023-08-15",
        date_of_visit: "2023-08-12",
        text_of_review:
          "I had a positive experience with Dr. Smith. He explained everything clearly.",
        rating: 4,
      },
    ],
  },
  {
    doctor_id: 1,
    clinic_id: 1,
    reviews: [
      {
        patient_id: "PATIENT003",
        phone_number: "+374-41-720003",
        date_of_review: "2023-08-14",
        date_of_visit: "2023-08-09",
        text_of_review:
          "Dr. Johnson was attentive and caring throughout the appointment.",
        rating: 5,
      },
    ],
  },
  {
    doctor_id: 2,
    clinic_id: 1,
    reviews: [
      {
        patient_id: "PATIENT004",
        phone_number: "+374-41-720004",
        date_of_review: "2023-08-13",
        date_of_visit: "2023-08-11",
        text_of_review:
          "I was disappointed with the service provided by Dr. Wilson.",
        rating: 2,
      },
    ],
  },
  {
    doctor_id: 3,
    clinic_id: 0,
    reviews: [
      {
        patient_id: "PATIENT005",
        phone_number: "+374-41-720005",
        date_of_review: "2023-08-12",
        date_of_visit: "2023-08-08",
        text_of_review:
          "Dr. Brown was friendly and took the time to address my concerns.",
        rating: 4,
      },
    ],
  },
  {
    doctor_id: 4,
    clinic_id: 2,
    reviews: [
      {
        patient_id: "PATIENT006",
        phone_number: "+374-41-720006",
        date_of_review: "2023-08-11",
        date_of_visit: "2023-08-07",
        text_of_review:
          "Dr. Davis provided excellent care and was very thorough.",
        rating: 5,
      },
    ],
  },
];
