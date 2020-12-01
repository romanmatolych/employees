import { groupUsersByBirthdayMonths } from './employees-birthday-utils';

describe('employees-birthday-utils', () => {
    // Given
    const users = [
        {
            "id": "5e00928d91e7feaa9872ec08",
            "firstName": "Yang",
            "lastName": "Carson",
            "dob": "2019-02-26T16:52:36.244Z"
        },
        {
            "id": "5e00928df892b0c84c82db9d",
            "firstName": "Dorsey",
            "lastName": "Meadows",
            "dob": "2019-09-19T09:34:32.083Z"
        },
        {
            "id": "5e00928dea77bb8b9a15bdc2",
            "firstName": "Roxanne",
            "lastName": "Salas",
            "dob": "2019-07-13T07:19:20.718Z"
        },
        {
            "id": "5e00928db89ff9c2559f9560",
            "firstName": "Watson",
            "lastName": "Good",
            "dob": "2019-09-09T03:24:32.532Z"
        }
    ];

    // Expected
    const expectedResult = {
        September: [
            {
                "id": "5e00928df892b0c84c82db9d",
                "firstName": "Dorsey",
                "lastName": "Meadows",
                "dob": "2019-09-19T09:34:32.083Z"
            },
            {
                "id": "5e00928db89ff9c2559f9560",
                "firstName": "Watson",
                "lastName": "Good",
                "dob": "2019-09-09T03:24:32.532Z"
            }
        ],
        July: [
            {
                "id": "5e00928dea77bb8b9a15bdc2",
                "firstName": "Roxanne",
                "lastName": "Salas",
                "dob": "2019-07-13T07:19:20.718Z"
            },
        ],
        February: [
            {
                "id": "5e00928d91e7feaa9872ec08",
                "firstName": "Yang",
                "lastName": "Carson",
                "dob": "2019-02-26T16:52:36.244Z"
            },
        ]
    };

    describe('groupUsersByBirthdayMonths', () => {
        it('Should group user list by users\' birthday months', () => {
            // When
            const result = groupUsersByBirthdayMonths(users);
            // Then
            expect(result).toMatchObject(expectedResult);
        });
    });

});
