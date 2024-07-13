import fastify from "fastify";	
import { prisma } from "./lib/prisma";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createTrip } from "./routes/create-trip";
import { confirmTrip } from "./routes/confirm-trip";
import cors from '@fastify/cors'
import { confirmParticipant } from "./routes/confirm-participant";
import { getActivities } from "./routes/get-activities";
import { createActivity } from "./routes/create-activity";

const app = fastify();

app.register(cors, {
    origin: '*'
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);
app.register(confirmTrip);
app.register(confirmParticipant);
app.register(getActivities);
app.register(createActivity);

app.listen({port : 3333}).then(() => {  
    console.log("listening on port");
});