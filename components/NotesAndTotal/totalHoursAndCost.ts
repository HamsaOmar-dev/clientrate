import { totalOfAField } from "./totalOfAField";

export const totalCost = (form: any) => {
  return (
    totalOfAField(form, "homemaking", 17.84) +
    totalOfAField(form, "shopping", 17.84) +
    totalOfAField(form, "individualmealprepinown", 17.84) +
    totalOfAField(form, "moneymanagement", 17.84) +
    totalOfAField(form, "assistancemakingappointments", 17.84) +
    totalOfAField(form, "arrangenonmedical", 17.84) +
    totalOfAField(form, "individualstaffratio1", 17.84) +
    totalOfAField(form, "individualstaffratio2", 5.1) +
    totalOfAField(form, "individualstaffratio3", 1.99) +
    totalOfAField(form, "individualstaffratio4", 1.09) +
    totalOfAField(form, "individualstaffratio5", 0.59) +
    totalOfAField(form, "breakfast", 3.67) +
    totalOfAField(form, "lunch", 4.57) +
    totalOfAField(form, "supper", 4.57) +
    totalOfAField(form, "snack", 0.45) +
    totalOfAField(form, "nonmedicaltransportation1", 17.84) +
    totalOfAField(form, "nonmedicaltransportation2", 0.63) +
    totalOfAField(form, "nonmedicaltransportation3", 8.92) +
    totalOfAField(form, "nonmedicaltransportation4", 0.33) +
    totalOfAField(form, "nonmedicaltransportation5", 4.46) +
    totalOfAField(form, "nonmedicaltransportation6", 0.16) +
    totalOfAField(form, "nonmedicaltransportation7", 2.24) +
    totalOfAField(form, "nonmedicaltransportation8", 0.1) +
    totalOfAField(form, "nonmedicaltransportation9", 1.19) +
    totalOfAField(form, "nonmedicaltransportation10", 0.05) +
    totalOfAField(form, "assistancewithdressing", 23.72) +
    totalOfAField(form, "assistancewithgrooming", 23.72) +
    totalOfAField(form, "assistancewithbathing", 23.72) +
    totalOfAField(form, "continencecare", 27.04) +
    totalOfAField(form, "assistancepositioning", 27.04) +
    totalOfAField(form, "assistanceeating", 27.04) +
    totalOfAField(form, "assistancewalking", 23.72) +
    totalOfAField(form, "assistancewheeling", 23.72) +
    totalOfAField(form, "assistancetransferring", 27.04) +
    totalOfAField(form, "assistancewithselfadministration", 27.04) +
    totalOfAField(form, "verbalorvisualmedicalreminders", 23.72) +
    totalOfAField(form, "insulininjection", 27.04) +
    totalOfAField(form, "therapeuticexercises", 27.04) +
    totalOfAField(form, "delegatedclinicalmonitoring", 27.04) +
    totalOfAField(form, "otherdelegatedtasks", 27.04) +
    totalOfAField(form, "medsetupsandmonitoring", 33.97) +
    totalOfAField(form, "insulindraws", 33.97) +
    totalOfAField(form, "managewandering", 23.72) +
    totalOfAField(form, "manageorientationissues", 23.72) +
    totalOfAField(form, "manageanxiety", 23.72) +
    totalOfAField(form, "managerepetitivebehavior", 23.72) +
    totalOfAField(form, "manageagitation", 23.72) +
    totalOfAField(form, "manageselfinjuriousbehavior", 23.72) +
    totalOfAField(form, "manageverbalaggression", 23.72) +
    totalOfAField(form, "managephysicalaggression", 23.72) +
    totalOfAField(form, "managepropertydestruction", 23.72) +
    totalOfAField(form, "meetothercognitivementalhealthneed1", 23.72) +
    totalOfAField(form, "meetothercognitivementalhealthneed2", 23.72) +
    totalOfAField(form, "meetothercognitivementalhealthneed3", 23.72)
  );
};

export const totalHours = (form: any) => {
  return (
    totalOfAField(form, "homemaking") +
    totalOfAField(form, "shopping") +
    totalOfAField(form, "individualmealprepinown") +
    totalOfAField(form, "moneymanagement") +
    totalOfAField(form, "assistancemakingappointments") +
    totalOfAField(form, "arrangenonmedical") +
    totalOfAField(form, "individualstaffratio1") +
    totalOfAField(form, "individualstaffratio2") +
    totalOfAField(form, "individualstaffratio3") +
    totalOfAField(form, "individualstaffratio4") +
    totalOfAField(form, "individualstaffratio5") +
    totalOfAField(form, "breakfast") +
    totalOfAField(form, "lunch") +
    totalOfAField(form, "supper") +
    totalOfAField(form, "snack") +
    totalOfAField(form, "nonmedicaltransportation1") +
    totalOfAField(form, "nonmedicaltransportation2") +
    totalOfAField(form, "nonmedicaltransportation3") +
    totalOfAField(form, "nonmedicaltransportation4") +
    totalOfAField(form, "nonmedicaltransportation5") +
    totalOfAField(form, "nonmedicaltransportation6") +
    totalOfAField(form, "nonmedicaltransportation7") +
    totalOfAField(form, "nonmedicaltransportation8") +
    totalOfAField(form, "nonmedicaltransportation9") +
    totalOfAField(form, "nonmedicaltransportation10") +
    totalOfAField(form, "assistancewithdressing") +
    totalOfAField(form, "assistancewithgrooming") +
    totalOfAField(form, "assistancewithbathing") +
    totalOfAField(form, "continencecare") +
    totalOfAField(form, "assistancepositioning") +
    totalOfAField(form, "assistanceeating") +
    totalOfAField(form, "assistancewalking") +
    totalOfAField(form, "assistancewheeling") +
    totalOfAField(form, "assistancetransferring") +
    totalOfAField(form, "assistancewithselfadministration") +
    totalOfAField(form, "verbalorvisualmedicalreminders") +
    totalOfAField(form, "insulininjection") +
    totalOfAField(form, "therapeuticexercises") +
    totalOfAField(form, "delegatedclinicalmonitoring") +
    totalOfAField(form, "otherdelegatedtasks") +
    totalOfAField(form, "medsetupsandmonitoring") +
    totalOfAField(form, "insulindraws") +
    totalOfAField(form, "managewandering") +
    totalOfAField(form, "manageorientationissues") +
    totalOfAField(form, "manageanxiety") +
    totalOfAField(form, "managerepetitivebehavior") +
    totalOfAField(form, "manageagitation") +
    totalOfAField(form, "manageselfinjuriousbehavior") +
    totalOfAField(form, "manageverbalaggression") +
    totalOfAField(form, "managephysicalaggression") +
    totalOfAField(form, "managepropertydestruction") +
    totalOfAField(form, "meetothercognitivementalhealthneed1") +
    totalOfAField(form, "meetothercognitivementalhealthneed2") +
    totalOfAField(form, "meetothercognitivementalhealthneed3")
  );
};
