# GetProjectsLastAliasRequest

## Example Usage

```typescript
import { GetProjectsLastAliasRequest } from "@vercel/sdk/models/operations/getprojects.js";

let value: GetProjectsLastAliasRequest = {
  fromDeploymentId: "<value>",
  toDeploymentId: "<value>",
  jobStatus: "in-progress",
  requestedAt: 2334.20,
  type: "rollback",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `fromDeploymentId`                                                                                             | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `toDeploymentId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `jobStatus`                                                                                                    | [operations.GetProjectsJobStatus](../../models/operations/getprojectsjobstatus.md)                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `requestedAt`                                                                                                  | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `type`                                                                                                         | [operations.GetProjectsProjectsResponse200Type](../../models/operations/getprojectsprojectsresponse200type.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |