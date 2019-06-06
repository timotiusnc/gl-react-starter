/*
 * browserHistory.ts
 * So if we want to change the history, we only need to change this file.
 * Not named history.ts because somehow it will cause the import from "history"
 * to be resolved into this file, causing error.
 *
 * Author: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * Created at: June 6th 2019
 * -----
 * Last Modified: June 6th 2019
 * Modified By: Timotius Nugroho Chandra (timotius.n.chandra@gdplabs.id)
 * -----
 * Copyright (c) 2019 GLAIR. All rights reserved.
 */

import { createBrowserHistory } from "history";
export default createBrowserHistory();
