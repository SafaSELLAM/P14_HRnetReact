
const firstNames = [
    "John", "Jane", "Michael", "Sarah", "David", "Emily", "Robert", "Lisa",
    "William", "Jennifer", "James", "Mary", "Christopher", "Patricia", "Daniel",
    "Linda", "Matthew", "Elizabeth", "Anthony", "Barbara", "Mark", "Susan",
    "Donald", "Jessica", "Steven", "Karen", "Paul", "Nancy", "Andrew", "Betty",
    "Joshua", "Helen", "Kenneth", "Sandra", "Kevin", "Donna", "Brian", "Carol",
    "George", "Ruth", "Timothy", "Sharon", "Ronald", "Michelle", "Jason", "Laura",
    "Edward", "Sarah", "Jeffrey", "Kimberly", "Ryan", "Deborah", "Jacob", "Dorothy"
]

const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
    "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
    "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson",
    "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker",
    "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell",
    "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker"
]

const cities = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
    "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville",
    "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle",
    "Denver", "Washington", "Boston", "El Paso", "Nashville", "Detroit", "Oklahoma City",
    "Portland", "Las Vegas", "Memphis", "Louisville", "Baltimore", "Milwaukee", "Albuquerque",
    "Tucson", "Fresno", "Mesa", "Sacramento", "Atlanta", "Kansas City", "Colorado Springs",
    "Omaha", "Raleigh", "Miami", "Long Beach", "Virginia Beach", "Oakland", "Minneapolis",
    "Tulsa", "Arlington", "Tampa", "New Orleans", "Wichita", "Cleveland", "Bakersfield"
]

const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA",
    "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT",
    "VA", "WA", "WV", "WI", "WY"
]

const streets = [
    "Main St", "Oak Ave", "Pine St", "Maple Ave", "Cedar St", "Elm St", "Washington Ave",
    "Park Ave", "Lincoln St", "Second St", "Third St", "First St", "Fourth St", "Fifth St",
    "Sixth St", "Seventh St", "Eighth St", "Ninth St", "Tenth St", "Church St", "Spring St",
    "Mill St", "River St", "High St", "School St", "State St", "Broad St", "Union St",
    "Water St", "North St", "South St", "East St", "West St", "Court St", "Jackson St",
    "Franklin St", "Jefferson St", "Madison St", "Monroe St", "Adams St", "Center St"
]

const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"]

const getRandomDate = (start, end) => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    return date.toLocaleDateString('en-US')
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const generateRandomEmployee = () => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const city = cities[Math.floor(Math.random() * cities.length)]
    const state = states[Math.floor(Math.random() * states.length)]
    const street = `${getRandomInt(1, 9999)} ${streets[Math.floor(Math.random() * streets.length)]}`
    const department = departments[Math.floor(Math.random() * departments.length)]

    return {
        firstName,
        lastName,
        dateOfBirth: getRandomDate(new Date(1960, 0, 1), new Date(2000, 11, 31)),
        startDate: getRandomDate(new Date(2015, 0, 1), new Date(2024, 11, 31)),
        street,
        city,
        state,
        zipCode: getRandomInt(10000, 99999).toString(),
        department
    }
}


export const generateMockEmployees = (count = 100) => {
    const employees = []
    for (let i = 0; i < count; i++) {
        employees.push(generateRandomEmployee())
    }
    return employees
}


export const mockEmployees = [
    {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: "15/03/1985",
        startDate: "01/01/2020",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        department: "Engineering"
    },
    {
        firstName: "Jane",
        lastName: "Smith",
        dateOfBirth: "07/22/1990",
        startDate: "06/15/2021",
        street: "456 Oak Ave",
        city: "Los Angeles",
        state: "CA",
        zipCode: "90210",
        department: "Marketing"
    },
    {
        firstName: "Michael",
        lastName: "Johnson",
        dateOfBirth: "11/08/1982",
        startDate: "03/10/2019",
        street: "789 Pine St",
        city: "Chicago",
        state: "IL",
        zipCode: "60601",
        department: "Sales"
    },
    {
        firstName: "Sarah",
        lastName: "Williams",
        dateOfBirth: "03/05/1988",
        startDate: "09/20/2022",
        street: "321 Elm St",
        city: "Houston",
        state: "TX",
        zipCode: "77001",
        department: "Human Resources"
    },
    {
        firstName: "David",
        lastName: "Brown",
        dateOfBirth: "12/17/1975",
        startDate: "05/02/2018",
        street: "654 Cedar Ave",
        city: "Phoenix",
        state: "AZ",
        zipCode: "85001",
        department: "Legal"
    }
]