export const MAX_USER_COUNT = 100000000;

export const generatedId = () => {
    return Math.floor(Math.random() * MAX_USER_COUNT)
};