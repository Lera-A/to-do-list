let nextId = 9;

export default function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
};