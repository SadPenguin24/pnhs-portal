/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const path_1 = __webpack_require__("path");
const serve_static_1 = __webpack_require__("@nestjs/serve-static");
//modules
const auth_module_1 = __webpack_require__("./apps/api/src/app/auth/auth.module.ts");
const enrollees_module_1 = __webpack_require__("./apps/api/src/app/enrollees/enrollees.module.ts");
const section_module_1 = __webpack_require__("./apps/api/src/app/section/section.module.ts");
const subject_module_1 = __webpack_require__("./apps/api/src/app/subjects/subject.module.ts");
const users_module_1 = __webpack_require__("./apps/api/src/app/users/users.module.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../../../../', 'apps/frontend/build'),
            }),
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
                    return ({
                        uri: process.env.MONGO_URI,
                    });
                }),
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            section_module_1.SectionModule,
            subject_module_1.SubjectModule,
            enrollees_module_1.EnrolleeModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
const local_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/local-auth.guard.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    login(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.authService.login(req.user);
        });
    }
};
tslib_1.__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('/login'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
const users_module_1 = __webpack_require__("./apps/api/src/app/users/users.module.ts");
const passport_1 = __webpack_require__("@nestjs/passport");
const local_strategy_1 = __webpack_require__("./apps/api/src/app/auth/local.strategy.ts");
const auth_controller_1 = __webpack_require__("./apps/api/src/app/auth/auth.controller.ts");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const constants_1 = __webpack_require__("./apps/api/src/app/auth/constants.ts");
const jwt_strategy_1 = __webpack_require__("./apps/api/src/app/auth/jwt.strategy.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const user_schema_1 = __webpack_require__("./apps/api/src/app/users/user.schema.ts");
let AuthModule = class AuthModule {
};
AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '10m' },
            }),
            mongoose_1.MongooseModule.forFeature([{ name: 'users', schema: user_schema_1.UserSchema }]),
        ],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/api/src/app/auth/auth.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const users_service_1 = __webpack_require__("./apps/api/src/app/users/users.service.ts");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const bcrypt = __webpack_require__("bcrypt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    validateUser(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersService.getUser(username);
            if (!user)
                return null;
            const passwordValid = yield bcrypt.compare(password, user.password);
            if (!user) {
                throw new common_1.NotAcceptableException('could not find the user');
            }
            if (user && passwordValid) {
                return user;
            }
            return null;
        });
    }
    login(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const payload = {
                username: user.email,
                sub: user._id,
                role: user.role,
            };
            const access_token = this.jwtService.sign(payload);
            const fUser = yield this.usersService.getUserById(user._id);
            return {
                user: fUser,
                access_token: access_token,
            };
        });
    }
};
AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/api/src/app/auth/constants.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConstants = void 0;
exports.jwtConstants = {
    secret: process.env.SECRET_KEY,
};


/***/ }),

/***/ "./apps/api/src/app/auth/jwt-auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;


/***/ }),

/***/ "./apps/api/src/app/auth/jwt.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_jwt_1 = __webpack_require__("passport-jwt");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const constants_1 = __webpack_require__("./apps/api/src/app/auth/constants.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: constants_1.jwtConstants.secret,
        });
    }
    validate(payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return {
                _id: payload.sub,
                username: payload.username,
                role: payload.role,
            };
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./apps/api/src/app/auth/local-auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const passport_1 = __webpack_require__("@nestjs/passport");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
LocalAuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./apps/api/src/app/auth/local.strategy.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const tslib_1 = __webpack_require__("tslib");
const passport_local_1 = __webpack_require__("passport-local");
const passport_1 = __webpack_require__("@nestjs/passport");
const common_1 = __webpack_require__("@nestjs/common");
const auth_service_1 = __webpack_require__("./apps/api/src/app/auth/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
        this.authService = authService;
    }
    validate(username, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.authService.validateUser(username, password);
            if (!user) {
                throw new common_1.UnauthorizedException();
            }
            return user;
        });
    }
};
LocalStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./apps/api/src/app/enrollees/enrollees.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnrolleeController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const common_2 = __webpack_require__("@nestjs/common");
const jwt_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/jwt-auth.guard.ts");
const roles_decorator_1 = __webpack_require__("./apps/api/src/app/roles/roles.decorator.ts");
const role_enum_1 = __webpack_require__("./apps/api/src/app/roles/role.enum.ts");
const roles_guard_1 = __webpack_require__("./apps/api/src/app/roles/roles.guard.ts");
const enrollees_service_1 = __webpack_require__("./apps/api/src/app/enrollees/enrollees.service.ts");
let EnrolleeController = class EnrolleeController {
    constructor(enrolleeService) {
        this.enrolleeService = enrolleeService;
    }
    createEnrollee(body) {
        return this.enrolleeService.createEnrollee(body);
    }
    getEnrollees() {
        return this.enrolleeService.getEnrollees();
    }
    getEnrolleeById(param) {
        return this.enrolleeService.getEnrolleeById(param.id);
    }
};
tslib_1.__decorate([
    (0, common_1.Post)('create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EnrolleeController.prototype, "createEnrollee", null);
tslib_1.__decorate([
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.Faculty),
    (0, common_1.Get)('/'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], EnrolleeController.prototype, "getEnrollees", null);
tslib_1.__decorate([
    (0, common_2.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.Faculty),
    (0, common_1.Get)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], EnrolleeController.prototype, "getEnrolleeById", null);
EnrolleeController = tslib_1.__decorate([
    (0, common_1.Controller)('enrollee'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof enrollees_service_1.EnrolleeService !== "undefined" && enrollees_service_1.EnrolleeService) === "function" ? _a : Object])
], EnrolleeController);
exports.EnrolleeController = EnrolleeController;


/***/ }),

/***/ "./apps/api/src/app/enrollees/enrollees.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnrolleeModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const local_strategy_1 = __webpack_require__("./apps/api/src/app/auth/local.strategy.ts");
const jwt_strategy_1 = __webpack_require__("./apps/api/src/app/auth/jwt.strategy.ts");
const auth_module_1 = __webpack_require__("./apps/api/src/app/auth/auth.module.ts");
const passport_1 = __webpack_require__("@nestjs/passport");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const user_schema_1 = __webpack_require__("./apps/api/src/app/users/user.schema.ts");
const enrollees_service_1 = __webpack_require__("./apps/api/src/app/enrollees/enrollees.service.ts");
const enrollees_controller_1 = __webpack_require__("./apps/api/src/app/enrollees/enrollees.controller.ts");
const enrollees_schema_1 = __webpack_require__("./apps/api/src/app/enrollees/enrollees.schema.ts");
let EnrolleeModule = class EnrolleeModule {
};
EnrolleeModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            passport_1.PassportModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'users', schema: user_schema_1.UserSchema },
                { name: 'enrollee', schema: enrollees_schema_1.EnrolleeSchema },
            ]),
        ],
        providers: [enrollees_service_1.EnrolleeService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [enrollees_service_1.EnrolleeService],
        controllers: [enrollees_controller_1.EnrolleeController],
    })
], EnrolleeModule);
exports.EnrolleeModule = EnrolleeModule;


/***/ }),

/***/ "./apps/api/src/app/enrollees/enrollees.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnrolleeSchema = exports.Enrollee = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
let Enrollee = class Enrollee {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "middle_name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "last_name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "email", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "password", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "address", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "phone_number", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "lrn", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "strand", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "birth_certificate", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "picture_2x2", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "grade_10_card", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Enrollee.prototype, "good_moral", void 0);
Enrollee = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Enrollee);
exports.Enrollee = Enrollee;
exports.EnrolleeSchema = mongoose_1.SchemaFactory.createForClass(Enrollee);


/***/ }),

/***/ "./apps/api/src/app/enrollees/enrollees.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnrolleeService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const bcrypt = __webpack_require__("bcrypt");
let EnrolleeService = class EnrolleeService {
    constructor(enrolleeModel) {
        this.enrolleeModel = enrolleeModel;
    }
    getEnrollees() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.enrolleeModel.find();
        });
    }
    createEnrollee(body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { first_name, middle_name, last_name, email, password, c_password, address, phone_number, birth_certificate, picture_2x2, grade_10_card, lrn, good_moral, strand, } = body;
            let hashPass;
            if (password === c_password)
                hashPass = yield bcrypt.hash(password, 10);
            return yield this.enrolleeModel.create({
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
                email: email,
                password: hashPass,
                address: address,
                phone_number: phone_number,
                birth_certificate: birth_certificate,
                picture_2x2: picture_2x2,
                grade_10_card: grade_10_card,
                lrn: lrn,
                good_moral: good_moral,
                strand: strand,
            });
        });
    }
    getEnrolleeById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.enrolleeModel.findById({ _id: id });
        });
    }
};
EnrolleeService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('enrollee')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], EnrolleeService);
exports.EnrolleeService = EnrolleeService;


/***/ }),

/***/ "./apps/api/src/app/roles/role.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Role = void 0;
var Role;
(function (Role) {
    Role["User"] = "user";
    Role["Admin"] = "admin";
    Role["Faculty"] = "faculty";
    Role["Student"] = "student";
})(Role = exports.Role || (exports.Role = {}));


/***/ }),

/***/ "./apps/api/src/app/roles/roles.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roles = exports.ROLES_KEY = void 0;
const common_1 = __webpack_require__("@nestjs/common");
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;


/***/ }),

/***/ "./apps/api/src/app/roles/roles.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const roles_decorator_1 = __webpack_require__("./apps/api/src/app/roles/roles.decorator.ts");
let RolesGuard = class RolesGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(roles_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => { var _a; return (_a = user.role[0]) === null || _a === void 0 ? void 0 : _a.includes(role); });
    }
};
RolesGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], RolesGuard);
exports.RolesGuard = RolesGuard;


/***/ }),

/***/ "./apps/api/src/app/schema/faculty.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FacultySchema = exports.Faculty = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const section_schema_1 = __webpack_require__("./apps/api/src/app/schema/section.schema.ts");
let Faculty = class Faculty {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", Array)
], Faculty.prototype, "subjects_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof section_schema_1.Section !== "undefined" && section_schema_1.Section) === "function" ? _a : Object)
], Faculty.prototype, "section", void 0);
Faculty = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Faculty);
exports.Faculty = Faculty;
exports.FacultySchema = mongoose_1.SchemaFactory.createForClass(Faculty);


/***/ }),

/***/ "./apps/api/src/app/schema/profile.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProfileSchema = exports.Profile = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
let Profile = class Profile {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "address", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "phone_number", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "birth_certificate", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "picture_2x2", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "grade_10_card", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "lrn", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Profile.prototype, "good_moral", void 0);
Profile = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Profile);
exports.Profile = Profile;
exports.ProfileSchema = mongoose_1.SchemaFactory.createForClass(Profile);


/***/ }),

/***/ "./apps/api/src/app/schema/section.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SectionSchema = exports.Section = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let Section = class Section {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof mongoose_2.Schema !== "undefined" && (_a = mongoose_2.Schema.Types) !== void 0 && _a.ObjectId) === "function" ? _b : Object)
], Section.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Section.prototype, "section_name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Section.prototype, "teacher_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", Array)
], Section.prototype, "students_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Section.prototype, "school_year", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", Array)
], Section.prototype, "subjects", void 0);
Section = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Section);
exports.Section = Section;
exports.SectionSchema = mongoose_1.SchemaFactory.createForClass(Section);


/***/ }),

/***/ "./apps/api/src/app/schema/student.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StudentSchema = exports.Student = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
let Student = class Student {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Student.prototype, "strand", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", Array)
], Student.prototype, "report_card", void 0);
Student = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Student);
exports.Student = Student;
exports.StudentSchema = mongoose_1.SchemaFactory.createForClass(Student);


/***/ }),

/***/ "./apps/api/src/app/schema/subject.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectSchema = exports.Subject = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let Subject = class Subject {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof mongoose_2.Schema !== "undefined" && (_a = mongoose_2.Schema.Types) !== void 0 && _a.ObjectId) === "function" ? _b : Object)
], Subject.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Subject.prototype, "subject_name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], Subject.prototype, "strand", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Subject.prototype, "time_in", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Subject.prototype, "time_out", void 0);
Subject = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Subject);
exports.Subject = Subject;
exports.SubjectSchema = mongoose_1.SchemaFactory.createForClass(Subject);


/***/ }),

/***/ "./apps/api/src/app/section/section.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SectionController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jwt_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/jwt-auth.guard.ts");
const roles_decorator_1 = __webpack_require__("./apps/api/src/app/roles/roles.decorator.ts");
const role_enum_1 = __webpack_require__("./apps/api/src/app/roles/role.enum.ts");
const roles_guard_1 = __webpack_require__("./apps/api/src/app/roles/roles.guard.ts");
const section_service_1 = __webpack_require__("./apps/api/src/app/section/section.service.ts");
let SectionController = class SectionController {
    constructor(sectionService) {
        this.sectionService = sectionService;
    }
    getParsedSection(param) {
        return this.sectionService.getParsedSection(param.id);
    }
    getSection(param) {
        return this.sectionService.getSection(param.id);
    }
    addSubjectToSection(param) {
        return this.sectionService.addSubjectToSection(param.section_id, param.subject_id);
    }
    createSection(body) {
        return this.sectionService.createSection(body);
    }
};
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.Faculty),
    (0, common_1.Get)('/parsed/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SectionController.prototype, "getParsedSection", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.Faculty),
    (0, common_1.Get)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SectionController.prototype, "getSection", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.Faculty),
    (0, common_1.Patch)('/:section_id/:subject_id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SectionController.prototype, "addSubjectToSection", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.Faculty),
    (0, common_1.Post)('create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SectionController.prototype, "createSection", null);
SectionController = tslib_1.__decorate([
    (0, common_1.Controller)('section'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof section_service_1.SectionService !== "undefined" && section_service_1.SectionService) === "function" ? _a : Object])
], SectionController);
exports.SectionController = SectionController;


/***/ }),

/***/ "./apps/api/src/app/section/section.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SectionModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const local_strategy_1 = __webpack_require__("./apps/api/src/app/auth/local.strategy.ts");
const jwt_strategy_1 = __webpack_require__("./apps/api/src/app/auth/jwt.strategy.ts");
const auth_module_1 = __webpack_require__("./apps/api/src/app/auth/auth.module.ts");
const passport_1 = __webpack_require__("@nestjs/passport");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const section_schema_1 = __webpack_require__("./apps/api/src/app/schema/section.schema.ts");
const section_service_1 = __webpack_require__("./apps/api/src/app/section/section.service.ts");
const section_controller_1 = __webpack_require__("./apps/api/src/app/section/section.controller.ts");
const users_module_1 = __webpack_require__("./apps/api/src/app/users/users.module.ts");
const user_schema_1 = __webpack_require__("./apps/api/src/app/users/user.schema.ts");
const subject_module_1 = __webpack_require__("./apps/api/src/app/subjects/subject.module.ts");
const subject_schema_1 = __webpack_require__("./apps/api/src/app/schema/subject.schema.ts");
let SectionModule = class SectionModule {
};
SectionModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            subject_module_1.SubjectModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            passport_1.PassportModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'users', schema: user_schema_1.UserSchema },
                { name: 'section', schema: section_schema_1.SectionSchema },
                { name: 'subjects', schema: subject_schema_1.SubjectSchema },
            ]),
        ],
        providers: [section_service_1.SectionService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [section_service_1.SectionService],
        controllers: [section_controller_1.SectionController],
    })
], SectionModule);
exports.SectionModule = SectionModule;


/***/ }),

/***/ "./apps/api/src/app/section/section.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SectionService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const subject_service_1 = __webpack_require__("./apps/api/src/app/subjects/subject.service.ts");
const users_service_1 = __webpack_require__("./apps/api/src/app/users/users.service.ts");
let SectionService = class SectionService {
    constructor(sectionModel, usersService, subjectService) {
        this.sectionModel = sectionModel;
        this.usersService = usersService;
        this.subjectService = subjectService;
    }
    getSection(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.sectionModel.findById(id);
        });
    }
    createSection(body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const students = yield this.usersService.getRole(body.role);
            //const faculty = await this.usersService.getUserById(body.teacher_id);
            const classStudents = [];
            body.students_id.map((student) => {
                students.map((v) => {
                    if (v._id.toString() === student) {
                        classStudents.push(v);
                    }
                });
            });
            const parsedSection = yield this.sectionModel.create({
                _id: new mongoose_2.Types.ObjectId(),
                section_name: body.section_name,
                teacher_id: body.teacher_id,
                students_id: body.students_id,
                school_year: body.school_year,
            });
            if (parsedSection) {
                body.students_id.map((id) => this.usersService.assignSectionToUser('student', parsedSection, id));
                this.usersService.assignSectionToUser('faculty', parsedSection, body.teacher_id);
            }
            return parsedSection;
        });
    }
    addSubjectToSection(section_id, subject_id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const subject = yield this.subjectService.getSubject(subject_id);
            const section = yield this.getSection(section_id);
            section.students_id.map((id) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield this.usersService.addSubject(id, subject);
            }));
            yield this.sectionModel.findByIdAndUpdate({ _id: section_id }, {
                $push: {
                    subjects: subject,
                },
            });
        });
    }
    getParsedSection(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const originSection = yield this.getSection(id);
            const parsedSection = Object.entries(originSection)[2][1];
            const faculty = yield this.usersService.getUserById(originSection.teacher_id);
            const promisedStudents = [];
            yield originSection.students_id.map((id) => promisedStudents.push(this.usersService.getUserById(id)));
            delete parsedSection.students_id;
            delete parsedSection.teacher_id;
            parsedSection['teacher'] = faculty;
            return Promise.all(promisedStudents).then((students) => {
                parsedSection['students'] = students;
                return parsedSection;
            });
        });
    }
};
SectionService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('section')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _b : Object, typeof (_c = typeof subject_service_1.SubjectService !== "undefined" && subject_service_1.SubjectService) === "function" ? _c : Object])
], SectionService);
exports.SectionService = SectionService;


/***/ }),

/***/ "./apps/api/src/app/subjects/subject.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
//* ^^ */ import { UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { Roles } from '../roles/roles.decorator';
// import { Role } from '../roles/role.enum';
// import { RolesGuard } from '../roles/roles.guard';
const subject_service_1 = __webpack_require__("./apps/api/src/app/subjects/subject.service.ts");
let SubjectController = class SubjectController {
    constructor(subjectService) {
        this.subjectService = subjectService;
    }
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles(Role.Admin, Role.Faculty)
    getSubject(param) {
        return this.subjectService.getSubject(param.id);
    }
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles(Role.Admin, Role.Faculty)
    createSubject(body) {
        return this.subjectService.createSubject(body);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SubjectController.prototype, "getSubject", null);
tslib_1.__decorate([
    (0, common_1.Post)('create'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], SubjectController.prototype, "createSubject", null);
SubjectController = tslib_1.__decorate([
    (0, common_1.Controller)('subject'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof subject_service_1.SubjectService !== "undefined" && subject_service_1.SubjectService) === "function" ? _a : Object])
], SubjectController);
exports.SubjectController = SubjectController;


/***/ }),

/***/ "./apps/api/src/app/subjects/subject.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const local_strategy_1 = __webpack_require__("./apps/api/src/app/auth/local.strategy.ts");
const jwt_strategy_1 = __webpack_require__("./apps/api/src/app/auth/jwt.strategy.ts");
const auth_module_1 = __webpack_require__("./apps/api/src/app/auth/auth.module.ts");
const passport_1 = __webpack_require__("@nestjs/passport");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const subject_service_1 = __webpack_require__("./apps/api/src/app/subjects/subject.service.ts");
const subject_controller_1 = __webpack_require__("./apps/api/src/app/subjects/subject.controller.ts");
const user_schema_1 = __webpack_require__("./apps/api/src/app/users/user.schema.ts");
const users_module_1 = __webpack_require__("./apps/api/src/app/users/users.module.ts");
const subject_schema_1 = __webpack_require__("./apps/api/src/app/schema/subject.schema.ts");
let SubjectModule = class SubjectModule {
};
SubjectModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            passport_1.PassportModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'users', schema: user_schema_1.UserSchema },
                { name: 'subject', schema: subject_schema_1.SubjectSchema },
            ]),
        ],
        providers: [subject_service_1.SubjectService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [subject_service_1.SubjectService],
        controllers: [subject_controller_1.SubjectController],
    })
], SubjectModule);
exports.SubjectModule = SubjectModule;


/***/ }),

/***/ "./apps/api/src/app/subjects/subject.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SubjectService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
let SubjectService = class SubjectService {
    constructor(subjectModel) {
        this.subjectModel = subjectModel;
    }
    createSubject(body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const newSubject = yield this.subjectModel.create({
                _id: new mongoose_2.Types.ObjectId(),
                subject_name: body.subject_name,
                strand: body.strand,
                // time_in: body.time_in,
                // time_out: body.time_out,
            });
            return newSubject;
        });
    }
    getSubject(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.subjectModel.findById(id);
        });
    }
};
SubjectService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('subject')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], SubjectService);
exports.SubjectService = SubjectService;


/***/ }),

/***/ "./apps/api/src/app/users/user.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const faculty_schema_1 = __webpack_require__("./apps/api/src/app/schema/faculty.schema.ts");
const student_schema_1 = __webpack_require__("./apps/api/src/app/schema/student.schema.ts");
const profile_1 = __webpack_require__("./apps/api/src/app/schema/profile.ts");
let User = class User {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof mongoose_2.Schema !== "undefined" && (_a = mongoose_2.Schema.Types) !== void 0 && _a.ObjectId) === "function" ? _b : Object)
], User.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "last_name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "first_name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "middle_name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "admin", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", typeof (_c = typeof faculty_schema_1.Faculty !== "undefined" && faculty_schema_1.Faculty) === "function" ? _c : Object)
], User.prototype, "faculty", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", typeof (_d = typeof student_schema_1.Student !== "undefined" && student_schema_1.Student) === "function" ? _d : Object)
], User.prototype, "student", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", typeof (_e = typeof profile_1.Profile !== "undefined" && profile_1.Profile) === "function" ? _e : Object)
], User.prototype, "profile", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "section_id", void 0);
User = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ }),

/***/ "./apps/api/src/app/users/users.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const jwt_auth_guard_1 = __webpack_require__("./apps/api/src/app/auth/jwt-auth.guard.ts");
const roles_decorator_1 = __webpack_require__("./apps/api/src/app/roles/roles.decorator.ts");
const role_enum_1 = __webpack_require__("./apps/api/src/app/roles/role.enum.ts");
const roles_guard_1 = __webpack_require__("./apps/api/src/app/roles/roles.guard.ts");
const users_service_1 = __webpack_require__("./apps/api/src/app/users/users.service.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getProfile(req) {
        return req.user;
    }
    createUser(body) {
        return this.usersService.createUser(body);
    }
    listStudentStrand(body) {
        return this.usersService.listStudentStrand(body);
    }
    getRole(body) {
        return this.usersService.getRole(body);
    }
    getUserById(param) {
        return this.usersService.getUserById(param.id);
    }
    updateGrade(param, body) {
        return this.usersService.updateGrade(param.student_id, param.subject_id, body);
    }
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles(Role.Admin)
    convertEtoS(param) {
        return this.usersService.convertEtoS(param.id);
    }
    getAllUser() {
        return this.usersService.getAllUser();
    }
};
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Get)('profile'),
    tslib_1.__param(0, (0, common_1.Request)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "getProfile", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Post)('register'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "createUser", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Get)('listStrand'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "listStudentStrand", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.Faculty),
    (0, common_1.Get)('role'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "getRole", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Get)('/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "getUserById", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin, role_enum_1.Role.Faculty),
    (0, common_1.Put)('/:student_id/:subject_id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "updateGrade", null);
tslib_1.__decorate([
    (0, common_1.Post)('/etos/:id'),
    tslib_1.__param(0, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "convertEtoS", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Get)('/'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], UsersController.prototype, "getAllUser", null);
UsersController = tslib_1.__decorate([
    (0, common_1.Controller)('user'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/api/src/app/users/users.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const users_service_1 = __webpack_require__("./apps/api/src/app/users/users.service.ts");
const local_strategy_1 = __webpack_require__("./apps/api/src/app/auth/local.strategy.ts");
const jwt_strategy_1 = __webpack_require__("./apps/api/src/app/auth/jwt.strategy.ts");
const auth_module_1 = __webpack_require__("./apps/api/src/app/auth/auth.module.ts");
const passport_1 = __webpack_require__("@nestjs/passport");
const users_controller_1 = __webpack_require__("./apps/api/src/app/users/users.controller.ts");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const user_schema_1 = __webpack_require__("./apps/api/src/app/users/user.schema.ts");
const enrollees_schema_1 = __webpack_require__("./apps/api/src/app/enrollees/enrollees.schema.ts");
const enrollees_module_1 = __webpack_require__("./apps/api/src/app/enrollees/enrollees.module.ts");
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            passport_1.PassportModule,
            mongoose_1.MongooseModule.forFeature([
                { name: 'users', schema: user_schema_1.UserSchema },
                { name: 'enrollee', schema: enrollees_schema_1.EnrolleeSchema },
            ]),
            enrollees_module_1.EnrolleeModule,
        ],
        providers: [users_service_1.UsersService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [users_service_1.UsersService],
        controllers: [users_controller_1.UsersController],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/api/src/app/users/users.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const bcrypt = __webpack_require__("bcrypt");
const enrollees_service_1 = __webpack_require__("./apps/api/src/app/enrollees/enrollees.service.ts");
let UsersService = class UsersService {
    constructor(userModel, enrolleeService) {
        this.userModel = userModel;
        this.enrolleeService = enrolleeService;
    }
    getUser(username) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userModel.findOne({ email: username });
            return user;
        });
    }
    getAllUser() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userModel.find({}).select(['-password']);
            return user;
        });
    }
    getUserById(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.userModel
                .findById({
                _id: id,
            })
                .select(['-password']);
            return user;
        });
    }
    getRole(body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userRole = yield this.userModel.find({ role: body.role || body });
            return userRole;
        });
    }
    assignSectionToUser(type, section, id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('SECTION: ', section);
            if (type === 'student') {
                return yield this.userModel.findByIdAndUpdate(id, {
                    section_id: section._id.toString(),
                });
            }
            else if (type === 'faculty') {
                return yield this.userModel.findByIdAndUpdate(id, {
                    section_id: section._id.toString(),
                });
            }
        });
    }
    addSubject(id, subject) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findByIdAndUpdate({ _id: id }, {
                $push: {
                    'student.report_card': { subject: subject, final_grade: 0 },
                },
            });
        });
    }
    convertEtoS(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const enrollee = yield this.enrolleeService.getEnrolleeById(id);
            const { _id, first_name, middle_name, last_name, email, password, address, phone_number, birth_certificate, picture_2x2, grade_10_card, lrn, good_moral, strand, } = enrollee;
            return yield this.userModel.create({
                _id: _id,
                first_name: first_name,
                middle_name: middle_name,
                last_name: last_name,
                email: email,
                password: password,
                student: { strand: strand },
                profile: {
                    address: address,
                    phone_number: phone_number,
                    birth_certificate: birth_certificate,
                    picture_2x2: picture_2x2,
                    grade_10_card: grade_10_card,
                    lrn: lrn,
                    good_moral: good_moral,
                },
            });
            return enrollee;
        });
    }
    updateGrade(student_id, subject_id, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUserById(student_id);
            const subj_index = user.student.report_card.findIndex((report_card) => {
                return report_card.subject._id.toString() == subject_id;
            });
            const patchedUser = user.student;
            patchedUser.report_card[subj_index].final_grade = body.grade;
            return yield this.userModel.findByIdAndUpdate({ _id: student_id }, {
                student: patchedUser,
            });
        });
    }
    createUser(body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email, password, last_name, first_name, middle_name, role, student, faculty, admin, } = body;
            try {
                const existUser = yield this.userModel.findOne({
                    email: body.email,
                });
                if (existUser) {
                    console.log('User Exists');
                }
                else {
                    const hashPass = yield bcrypt.hash(password, 10);
                    const newUser = yield this.userModel.create({
                        _id: new mongoose_2.Types.ObjectId(),
                        last_name: last_name,
                        first_name: first_name,
                        middle_name: middle_name,
                        email: email,
                        password: hashPass,
                        role: role,
                        student: student,
                        faculty: faculty,
                        admin: admin,
                    });
                    return newUser;
                }
            }
            catch (err) {
                console.log('error create User: ', err);
            }
        });
    }
    editUser(id, body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { email, password, last_name, first_name, middle_name, role, student, faculty, admin, } = body;
            const existUser = yield this.userModel.findById({ _id: id });
            if (existUser) {
                return 'User Exists';
            }
            const hashPass = yield bcrypt.hash(password, 10);
            const updateUser = yield this.userModel.findByIdAndUpdate({ _id: id }, {
                last_name: last_name ? last_name : existUser.last_name,
                first_name: first_name ? first_name : existUser.first_name,
                middle_name: middle_name ? middle_name : existUser.middle_name,
                email: email ? email : existUser.email,
                password: password ? hashPass : existUser.password,
                role: role ? role : existUser.role,
                student: student ? student : existUser.student,
                faculty: faculty ? faculty : existUser.faculty,
                admin: admin ? admin : existUser.admin,
            });
            return updateUser;
        });
    }
    listStudentStrand(body) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const userStrands = yield this.userModel.find({
                'student.strand': body.strand,
            });
            return userStrands;
        });
    }
};
UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)('users')),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof enrollees_service_1.EnrolleeService !== "undefined" && enrollees_service_1.EnrolleeService) === "function" ? _b : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/passport":
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/serve-static":
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "passport-jwt":
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const bodyParser = __webpack_require__("body-parser");
const app_module_1 = __webpack_require__("./apps/api/src/app/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
        app.use(bodyParser.json({ limit: '20mb' }));
        app.use(bodyParser.urlencoded({ limit: '20mb' }));
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        //change origin in prod
        app.enableCors({ credentials: true, origin: 'http://112.201.131.247:4200' });
        const port = process.env.PORT || 3333;
        yield app.listen(port);
        common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map