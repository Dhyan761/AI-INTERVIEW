
import { pgTable,text,serial,varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('MockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition', { length: 255 }).notNull(),
    jobDesc: varchar('jobDesc', { length: 255 }).notNull(),
    jobExperience: varchar('jobExperience', { length: 255 }).notNull(),
    createdBy: varchar('createdBy', { length: 255 }).notNull(),
    createdAt: varchar('createdAt', { length: 255 }),
    mockId: varchar('mockId', { length: 255 }).notNull()
  });

  export const UserAnswer=pgTable('USANSWER',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId'),
    question:varchar('question').notNull(),
    correctAns:text('correctAns').notNull(),
    userAns:text('userAns'),
    feedback:text('feedback'), 
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt'),
});