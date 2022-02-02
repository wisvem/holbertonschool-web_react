namespace Subjects {
    export class Java extends Subject {
        experienceTeachingJava?: number;

        getRequirements(): string {
            return 'Here are the requirements for Java';
        }

        getAvailableTeacher(): string {
            if (this.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
