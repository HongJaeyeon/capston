import { atom, selector } from "recoil";
export interface Idata {
    title: string;
    url: string;
    workplace: string;
    recruitment_staff: string;
    recruitment_field: string;
    qualification_license: string;
    job_specifications: string;
    employment: string;
    wages: string;
    business_hours: string;
    recruiter: string;
    contact_address: string;
}
export const cityAtom = atom({
    key: "city",
    default: "",
});

export const city1Atom = atom({
    key: "city1",
    default: "",
});

export const city2Atom = atom({
    key: "city2",
    default: "",
});

export const jobsAtom = atom({
    key: "jobs",
    default: "",
});

export const dataAtom = atom<Idata[]>({
    key: "data",
    default: [],
});

// export const cityFilter = selector({
//   key: "cityfilter",
//   get: ({ get }) => {
//     const data = get(dataAtom);
//     // const city = get(cityAtom);
//     // const city1 = get(city1Atom);
//     // const city2 = get(city2Atom);
//     const list = []
//     data.map(data => {
//         if ({data}.data.workplace.includes("서울")) {
//             list.push({data}.data.workplace);
//         }
//     });
    
//     return list;
//         // 끝이 '시/도' -> 도산동
//         // 끝이 ''
//         //이렇게 push하는데에 list라는 변수 하나 더쓰는데 selector 쓸필요 잇냐..?
//     },
// })