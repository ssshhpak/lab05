interface User {
    name: string;
    age: number;
    email: string;
}

type SkillLevel = 'beginner' | 'intermediate' | 'Expert';

interface Skill {
    id: number;
    name: string;
    level: SkillLevel;
}

export interface User {
    name: string;
    email: string;
    age: number;
}