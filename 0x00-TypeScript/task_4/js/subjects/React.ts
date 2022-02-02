namespace Subjects {
    export class React extends Subject {
        experienceTeachingReact?: number;

        getRequirements(): string {
            return 'Here are the requirements for React';
        }

        getAvailableTeacher(): string {
            if (this.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }
}
