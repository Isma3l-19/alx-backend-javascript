export default function getListStudentsByLocation(list, city) {
    return list.filter((obj) => obj.location === city);
}