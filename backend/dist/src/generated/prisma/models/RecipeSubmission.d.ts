import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model RecipeSubmission
 *
 */
export type RecipeSubmissionModel = runtime.Types.Result.DefaultSelection<Prisma.$RecipeSubmissionPayload>;
export type AggregateRecipeSubmission = {
    _count: RecipeSubmissionCountAggregateOutputType | null;
    _avg: RecipeSubmissionAvgAggregateOutputType | null;
    _sum: RecipeSubmissionSumAggregateOutputType | null;
    _min: RecipeSubmissionMinAggregateOutputType | null;
    _max: RecipeSubmissionMaxAggregateOutputType | null;
};
export type RecipeSubmissionAvgAggregateOutputType = {
    score: number | null;
    likesCount: number | null;
    commentsCount: number | null;
};
export type RecipeSubmissionSumAggregateOutputType = {
    score: number | null;
    likesCount: number | null;
    commentsCount: number | null;
};
export type RecipeSubmissionMinAggregateOutputType = {
    id: string | null;
    imageUrl: string | null;
    score: number | null;
    feedback: string | null;
    isFraud: boolean | null;
    status: $Enums.SubmissionStatus | null;
    caption: string | null;
    visibility: $Enums.Visibility | null;
    likesCount: number | null;
    commentsCount: number | null;
    createdAt: Date | null;
    userId: string | null;
    recipeId: string | null;
};
export type RecipeSubmissionMaxAggregateOutputType = {
    id: string | null;
    imageUrl: string | null;
    score: number | null;
    feedback: string | null;
    isFraud: boolean | null;
    status: $Enums.SubmissionStatus | null;
    caption: string | null;
    visibility: $Enums.Visibility | null;
    likesCount: number | null;
    commentsCount: number | null;
    createdAt: Date | null;
    userId: string | null;
    recipeId: string | null;
};
export type RecipeSubmissionCountAggregateOutputType = {
    id: number;
    imageUrl: number;
    score: number;
    feedback: number;
    isFraud: number;
    status: number;
    caption: number;
    visibility: number;
    likesCount: number;
    commentsCount: number;
    createdAt: number;
    userId: number;
    recipeId: number;
    _all: number;
};
export type RecipeSubmissionAvgAggregateInputType = {
    score?: true;
    likesCount?: true;
    commentsCount?: true;
};
export type RecipeSubmissionSumAggregateInputType = {
    score?: true;
    likesCount?: true;
    commentsCount?: true;
};
export type RecipeSubmissionMinAggregateInputType = {
    id?: true;
    imageUrl?: true;
    score?: true;
    feedback?: true;
    isFraud?: true;
    status?: true;
    caption?: true;
    visibility?: true;
    likesCount?: true;
    commentsCount?: true;
    createdAt?: true;
    userId?: true;
    recipeId?: true;
};
export type RecipeSubmissionMaxAggregateInputType = {
    id?: true;
    imageUrl?: true;
    score?: true;
    feedback?: true;
    isFraud?: true;
    status?: true;
    caption?: true;
    visibility?: true;
    likesCount?: true;
    commentsCount?: true;
    createdAt?: true;
    userId?: true;
    recipeId?: true;
};
export type RecipeSubmissionCountAggregateInputType = {
    id?: true;
    imageUrl?: true;
    score?: true;
    feedback?: true;
    isFraud?: true;
    status?: true;
    caption?: true;
    visibility?: true;
    likesCount?: true;
    commentsCount?: true;
    createdAt?: true;
    userId?: true;
    recipeId?: true;
    _all?: true;
};
export type RecipeSubmissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeSubmission to aggregate.
     */
    where?: Prisma.RecipeSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecipeSubmissions to fetch.
     */
    orderBy?: Prisma.RecipeSubmissionOrderByWithRelationInput | Prisma.RecipeSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RecipeSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecipeSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecipeSubmissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RecipeSubmissions
    **/
    _count?: true | RecipeSubmissionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RecipeSubmissionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RecipeSubmissionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RecipeSubmissionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RecipeSubmissionMaxAggregateInputType;
};
export type GetRecipeSubmissionAggregateType<T extends RecipeSubmissionAggregateArgs> = {
    [P in keyof T & keyof AggregateRecipeSubmission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRecipeSubmission[P]> : Prisma.GetScalarType<T[P], AggregateRecipeSubmission[P]>;
};
export type RecipeSubmissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeSubmissionWhereInput;
    orderBy?: Prisma.RecipeSubmissionOrderByWithAggregationInput | Prisma.RecipeSubmissionOrderByWithAggregationInput[];
    by: Prisma.RecipeSubmissionScalarFieldEnum[] | Prisma.RecipeSubmissionScalarFieldEnum;
    having?: Prisma.RecipeSubmissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecipeSubmissionCountAggregateInputType | true;
    _avg?: RecipeSubmissionAvgAggregateInputType;
    _sum?: RecipeSubmissionSumAggregateInputType;
    _min?: RecipeSubmissionMinAggregateInputType;
    _max?: RecipeSubmissionMaxAggregateInputType;
};
export type RecipeSubmissionGroupByOutputType = {
    id: string;
    imageUrl: string;
    score: number | null;
    feedback: string | null;
    isFraud: boolean;
    status: $Enums.SubmissionStatus;
    caption: string | null;
    visibility: $Enums.Visibility;
    likesCount: number;
    commentsCount: number;
    createdAt: Date;
    userId: string;
    recipeId: string;
    _count: RecipeSubmissionCountAggregateOutputType | null;
    _avg: RecipeSubmissionAvgAggregateOutputType | null;
    _sum: RecipeSubmissionSumAggregateOutputType | null;
    _min: RecipeSubmissionMinAggregateOutputType | null;
    _max: RecipeSubmissionMaxAggregateOutputType | null;
};
export type GetRecipeSubmissionGroupByPayload<T extends RecipeSubmissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RecipeSubmissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RecipeSubmissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RecipeSubmissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RecipeSubmissionGroupByOutputType[P]>;
}>>;
export type RecipeSubmissionWhereInput = {
    AND?: Prisma.RecipeSubmissionWhereInput | Prisma.RecipeSubmissionWhereInput[];
    OR?: Prisma.RecipeSubmissionWhereInput[];
    NOT?: Prisma.RecipeSubmissionWhereInput | Prisma.RecipeSubmissionWhereInput[];
    id?: Prisma.StringFilter<"RecipeSubmission"> | string;
    imageUrl?: Prisma.StringFilter<"RecipeSubmission"> | string;
    score?: Prisma.FloatNullableFilter<"RecipeSubmission"> | number | null;
    feedback?: Prisma.StringNullableFilter<"RecipeSubmission"> | string | null;
    isFraud?: Prisma.BoolFilter<"RecipeSubmission"> | boolean;
    status?: Prisma.EnumSubmissionStatusFilter<"RecipeSubmission"> | $Enums.SubmissionStatus;
    caption?: Prisma.StringNullableFilter<"RecipeSubmission"> | string | null;
    visibility?: Prisma.EnumVisibilityFilter<"RecipeSubmission"> | $Enums.Visibility;
    likesCount?: Prisma.IntFilter<"RecipeSubmission"> | number;
    commentsCount?: Prisma.IntFilter<"RecipeSubmission"> | number;
    createdAt?: Prisma.DateTimeFilter<"RecipeSubmission"> | Date | string;
    userId?: Prisma.StringFilter<"RecipeSubmission"> | string;
    recipeId?: Prisma.StringFilter<"RecipeSubmission"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    recipe?: Prisma.XOR<Prisma.RecipeScalarRelationFilter, Prisma.RecipeWhereInput>;
    comments?: Prisma.CommentListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
};
export type RecipeSubmissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    isFraud?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    caption?: Prisma.SortOrderInput | Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    likesCount?: Prisma.SortOrder;
    commentsCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    recipeId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    recipe?: Prisma.RecipeOrderByWithRelationInput;
    comments?: Prisma.CommentOrderByRelationAggregateInput;
    likes?: Prisma.LikeOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
};
export type RecipeSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RecipeSubmissionWhereInput | Prisma.RecipeSubmissionWhereInput[];
    OR?: Prisma.RecipeSubmissionWhereInput[];
    NOT?: Prisma.RecipeSubmissionWhereInput | Prisma.RecipeSubmissionWhereInput[];
    imageUrl?: Prisma.StringFilter<"RecipeSubmission"> | string;
    score?: Prisma.FloatNullableFilter<"RecipeSubmission"> | number | null;
    feedback?: Prisma.StringNullableFilter<"RecipeSubmission"> | string | null;
    isFraud?: Prisma.BoolFilter<"RecipeSubmission"> | boolean;
    status?: Prisma.EnumSubmissionStatusFilter<"RecipeSubmission"> | $Enums.SubmissionStatus;
    caption?: Prisma.StringNullableFilter<"RecipeSubmission"> | string | null;
    visibility?: Prisma.EnumVisibilityFilter<"RecipeSubmission"> | $Enums.Visibility;
    likesCount?: Prisma.IntFilter<"RecipeSubmission"> | number;
    commentsCount?: Prisma.IntFilter<"RecipeSubmission"> | number;
    createdAt?: Prisma.DateTimeFilter<"RecipeSubmission"> | Date | string;
    userId?: Prisma.StringFilter<"RecipeSubmission"> | string;
    recipeId?: Prisma.StringFilter<"RecipeSubmission"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    recipe?: Prisma.XOR<Prisma.RecipeScalarRelationFilter, Prisma.RecipeWhereInput>;
    comments?: Prisma.CommentListRelationFilter;
    likes?: Prisma.LikeListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
}, "id">;
export type RecipeSubmissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    score?: Prisma.SortOrderInput | Prisma.SortOrder;
    feedback?: Prisma.SortOrderInput | Prisma.SortOrder;
    isFraud?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    caption?: Prisma.SortOrderInput | Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    likesCount?: Prisma.SortOrder;
    commentsCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    recipeId?: Prisma.SortOrder;
    _count?: Prisma.RecipeSubmissionCountOrderByAggregateInput;
    _avg?: Prisma.RecipeSubmissionAvgOrderByAggregateInput;
    _max?: Prisma.RecipeSubmissionMaxOrderByAggregateInput;
    _min?: Prisma.RecipeSubmissionMinOrderByAggregateInput;
    _sum?: Prisma.RecipeSubmissionSumOrderByAggregateInput;
};
export type RecipeSubmissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.RecipeSubmissionScalarWhereWithAggregatesInput | Prisma.RecipeSubmissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.RecipeSubmissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RecipeSubmissionScalarWhereWithAggregatesInput | Prisma.RecipeSubmissionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RecipeSubmission"> | string;
    imageUrl?: Prisma.StringWithAggregatesFilter<"RecipeSubmission"> | string;
    score?: Prisma.FloatNullableWithAggregatesFilter<"RecipeSubmission"> | number | null;
    feedback?: Prisma.StringNullableWithAggregatesFilter<"RecipeSubmission"> | string | null;
    isFraud?: Prisma.BoolWithAggregatesFilter<"RecipeSubmission"> | boolean;
    status?: Prisma.EnumSubmissionStatusWithAggregatesFilter<"RecipeSubmission"> | $Enums.SubmissionStatus;
    caption?: Prisma.StringNullableWithAggregatesFilter<"RecipeSubmission"> | string | null;
    visibility?: Prisma.EnumVisibilityWithAggregatesFilter<"RecipeSubmission"> | $Enums.Visibility;
    likesCount?: Prisma.IntWithAggregatesFilter<"RecipeSubmission"> | number;
    commentsCount?: Prisma.IntWithAggregatesFilter<"RecipeSubmission"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RecipeSubmission"> | Date | string;
    userId?: Prisma.StringWithAggregatesFilter<"RecipeSubmission"> | string;
    recipeId?: Prisma.StringWithAggregatesFilter<"RecipeSubmission"> | string;
};
export type RecipeSubmissionCreateInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSubmissionsInput;
    recipe: Prisma.RecipeCreateNestedOneWithoutSubmissionsInput;
    comments?: Prisma.CommentCreateNestedManyWithoutSubmissionInput;
    likes?: Prisma.LikeCreateNestedManyWithoutSubmissionInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionUncheckedCreateInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    userId: string;
    recipeId: string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutSubmissionInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutSubmissionInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSubmissionsNestedInput;
    recipe?: Prisma.RecipeUpdateOneRequiredWithoutSubmissionsNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutSubmissionNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutSubmissionNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeId?: Prisma.StringFieldUpdateOperationsInput | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutSubmissionNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutSubmissionNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionCreateManyInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    userId: string;
    recipeId: string;
};
export type RecipeSubmissionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecipeSubmissionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RecipeSubmissionListRelationFilter = {
    every?: Prisma.RecipeSubmissionWhereInput;
    some?: Prisma.RecipeSubmissionWhereInput;
    none?: Prisma.RecipeSubmissionWhereInput;
};
export type RecipeSubmissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RecipeSubmissionNullableScalarRelationFilter = {
    is?: Prisma.RecipeSubmissionWhereInput | null;
    isNot?: Prisma.RecipeSubmissionWhereInput | null;
};
export type RecipeSubmissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    isFraud?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    likesCount?: Prisma.SortOrder;
    commentsCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    recipeId?: Prisma.SortOrder;
};
export type RecipeSubmissionAvgOrderByAggregateInput = {
    score?: Prisma.SortOrder;
    likesCount?: Prisma.SortOrder;
    commentsCount?: Prisma.SortOrder;
};
export type RecipeSubmissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    isFraud?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    likesCount?: Prisma.SortOrder;
    commentsCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    recipeId?: Prisma.SortOrder;
};
export type RecipeSubmissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    score?: Prisma.SortOrder;
    feedback?: Prisma.SortOrder;
    isFraud?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    visibility?: Prisma.SortOrder;
    likesCount?: Prisma.SortOrder;
    commentsCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    recipeId?: Prisma.SortOrder;
};
export type RecipeSubmissionSumOrderByAggregateInput = {
    score?: Prisma.SortOrder;
    likesCount?: Prisma.SortOrder;
    commentsCount?: Prisma.SortOrder;
};
export type RecipeSubmissionScalarRelationFilter = {
    is?: Prisma.RecipeSubmissionWhereInput;
    isNot?: Prisma.RecipeSubmissionWhereInput;
};
export type RecipeSubmissionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutUserInput, Prisma.RecipeSubmissionUncheckedCreateWithoutUserInput> | Prisma.RecipeSubmissionCreateWithoutUserInput[] | Prisma.RecipeSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutUserInput | Prisma.RecipeSubmissionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RecipeSubmissionCreateManyUserInputEnvelope;
    connect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
};
export type RecipeSubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutUserInput, Prisma.RecipeSubmissionUncheckedCreateWithoutUserInput> | Prisma.RecipeSubmissionCreateWithoutUserInput[] | Prisma.RecipeSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutUserInput | Prisma.RecipeSubmissionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RecipeSubmissionCreateManyUserInputEnvelope;
    connect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
};
export type RecipeSubmissionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutUserInput, Prisma.RecipeSubmissionUncheckedCreateWithoutUserInput> | Prisma.RecipeSubmissionCreateWithoutUserInput[] | Prisma.RecipeSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutUserInput | Prisma.RecipeSubmissionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RecipeSubmissionUpsertWithWhereUniqueWithoutUserInput | Prisma.RecipeSubmissionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RecipeSubmissionCreateManyUserInputEnvelope;
    set?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    disconnect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    delete?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    connect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    update?: Prisma.RecipeSubmissionUpdateWithWhereUniqueWithoutUserInput | Prisma.RecipeSubmissionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RecipeSubmissionUpdateManyWithWhereWithoutUserInput | Prisma.RecipeSubmissionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RecipeSubmissionScalarWhereInput | Prisma.RecipeSubmissionScalarWhereInput[];
};
export type RecipeSubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutUserInput, Prisma.RecipeSubmissionUncheckedCreateWithoutUserInput> | Prisma.RecipeSubmissionCreateWithoutUserInput[] | Prisma.RecipeSubmissionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutUserInput | Prisma.RecipeSubmissionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RecipeSubmissionUpsertWithWhereUniqueWithoutUserInput | Prisma.RecipeSubmissionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RecipeSubmissionCreateManyUserInputEnvelope;
    set?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    disconnect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    delete?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    connect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    update?: Prisma.RecipeSubmissionUpdateWithWhereUniqueWithoutUserInput | Prisma.RecipeSubmissionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RecipeSubmissionUpdateManyWithWhereWithoutUserInput | Prisma.RecipeSubmissionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RecipeSubmissionScalarWhereInput | Prisma.RecipeSubmissionScalarWhereInput[];
};
export type RecipeSubmissionCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutNotificationsInput, Prisma.RecipeSubmissionUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.RecipeSubmissionWhereUniqueInput;
};
export type RecipeSubmissionUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutNotificationsInput, Prisma.RecipeSubmissionUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.RecipeSubmissionUpsertWithoutNotificationsInput;
    disconnect?: Prisma.RecipeSubmissionWhereInput | boolean;
    delete?: Prisma.RecipeSubmissionWhereInput | boolean;
    connect?: Prisma.RecipeSubmissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeSubmissionUpdateToOneWithWhereWithoutNotificationsInput, Prisma.RecipeSubmissionUpdateWithoutNotificationsInput>, Prisma.RecipeSubmissionUncheckedUpdateWithoutNotificationsInput>;
};
export type RecipeSubmissionCreateNestedManyWithoutRecipeInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutRecipeInput, Prisma.RecipeSubmissionUncheckedCreateWithoutRecipeInput> | Prisma.RecipeSubmissionCreateWithoutRecipeInput[] | Prisma.RecipeSubmissionUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutRecipeInput | Prisma.RecipeSubmissionCreateOrConnectWithoutRecipeInput[];
    createMany?: Prisma.RecipeSubmissionCreateManyRecipeInputEnvelope;
    connect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
};
export type RecipeSubmissionUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutRecipeInput, Prisma.RecipeSubmissionUncheckedCreateWithoutRecipeInput> | Prisma.RecipeSubmissionCreateWithoutRecipeInput[] | Prisma.RecipeSubmissionUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutRecipeInput | Prisma.RecipeSubmissionCreateOrConnectWithoutRecipeInput[];
    createMany?: Prisma.RecipeSubmissionCreateManyRecipeInputEnvelope;
    connect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
};
export type RecipeSubmissionUpdateManyWithoutRecipeNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutRecipeInput, Prisma.RecipeSubmissionUncheckedCreateWithoutRecipeInput> | Prisma.RecipeSubmissionCreateWithoutRecipeInput[] | Prisma.RecipeSubmissionUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutRecipeInput | Prisma.RecipeSubmissionCreateOrConnectWithoutRecipeInput[];
    upsert?: Prisma.RecipeSubmissionUpsertWithWhereUniqueWithoutRecipeInput | Prisma.RecipeSubmissionUpsertWithWhereUniqueWithoutRecipeInput[];
    createMany?: Prisma.RecipeSubmissionCreateManyRecipeInputEnvelope;
    set?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    disconnect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    delete?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    connect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    update?: Prisma.RecipeSubmissionUpdateWithWhereUniqueWithoutRecipeInput | Prisma.RecipeSubmissionUpdateWithWhereUniqueWithoutRecipeInput[];
    updateMany?: Prisma.RecipeSubmissionUpdateManyWithWhereWithoutRecipeInput | Prisma.RecipeSubmissionUpdateManyWithWhereWithoutRecipeInput[];
    deleteMany?: Prisma.RecipeSubmissionScalarWhereInput | Prisma.RecipeSubmissionScalarWhereInput[];
};
export type RecipeSubmissionUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutRecipeInput, Prisma.RecipeSubmissionUncheckedCreateWithoutRecipeInput> | Prisma.RecipeSubmissionCreateWithoutRecipeInput[] | Prisma.RecipeSubmissionUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutRecipeInput | Prisma.RecipeSubmissionCreateOrConnectWithoutRecipeInput[];
    upsert?: Prisma.RecipeSubmissionUpsertWithWhereUniqueWithoutRecipeInput | Prisma.RecipeSubmissionUpsertWithWhereUniqueWithoutRecipeInput[];
    createMany?: Prisma.RecipeSubmissionCreateManyRecipeInputEnvelope;
    set?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    disconnect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    delete?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    connect?: Prisma.RecipeSubmissionWhereUniqueInput | Prisma.RecipeSubmissionWhereUniqueInput[];
    update?: Prisma.RecipeSubmissionUpdateWithWhereUniqueWithoutRecipeInput | Prisma.RecipeSubmissionUpdateWithWhereUniqueWithoutRecipeInput[];
    updateMany?: Prisma.RecipeSubmissionUpdateManyWithWhereWithoutRecipeInput | Prisma.RecipeSubmissionUpdateManyWithWhereWithoutRecipeInput[];
    deleteMany?: Prisma.RecipeSubmissionScalarWhereInput | Prisma.RecipeSubmissionScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus;
};
export type EnumVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.Visibility;
};
export type RecipeSubmissionCreateNestedOneWithoutCommentsInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutCommentsInput, Prisma.RecipeSubmissionUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutCommentsInput;
    connect?: Prisma.RecipeSubmissionWhereUniqueInput;
};
export type RecipeSubmissionUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutCommentsInput, Prisma.RecipeSubmissionUncheckedCreateWithoutCommentsInput>;
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutCommentsInput;
    upsert?: Prisma.RecipeSubmissionUpsertWithoutCommentsInput;
    connect?: Prisma.RecipeSubmissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeSubmissionUpdateToOneWithWhereWithoutCommentsInput, Prisma.RecipeSubmissionUpdateWithoutCommentsInput>, Prisma.RecipeSubmissionUncheckedUpdateWithoutCommentsInput>;
};
export type RecipeSubmissionCreateNestedOneWithoutLikesInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutLikesInput, Prisma.RecipeSubmissionUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutLikesInput;
    connect?: Prisma.RecipeSubmissionWhereUniqueInput;
};
export type RecipeSubmissionUpdateOneRequiredWithoutLikesNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutLikesInput, Prisma.RecipeSubmissionUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.RecipeSubmissionCreateOrConnectWithoutLikesInput;
    upsert?: Prisma.RecipeSubmissionUpsertWithoutLikesInput;
    connect?: Prisma.RecipeSubmissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeSubmissionUpdateToOneWithWhereWithoutLikesInput, Prisma.RecipeSubmissionUpdateWithoutLikesInput>, Prisma.RecipeSubmissionUncheckedUpdateWithoutLikesInput>;
};
export type RecipeSubmissionCreateWithoutUserInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    recipe: Prisma.RecipeCreateNestedOneWithoutSubmissionsInput;
    comments?: Prisma.CommentCreateNestedManyWithoutSubmissionInput;
    likes?: Prisma.LikeCreateNestedManyWithoutSubmissionInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionUncheckedCreateWithoutUserInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    recipeId: string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutSubmissionInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutSubmissionInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionCreateOrConnectWithoutUserInput = {
    where: Prisma.RecipeSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutUserInput, Prisma.RecipeSubmissionUncheckedCreateWithoutUserInput>;
};
export type RecipeSubmissionCreateManyUserInputEnvelope = {
    data: Prisma.RecipeSubmissionCreateManyUserInput | Prisma.RecipeSubmissionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RecipeSubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RecipeSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecipeSubmissionUpdateWithoutUserInput, Prisma.RecipeSubmissionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutUserInput, Prisma.RecipeSubmissionUncheckedCreateWithoutUserInput>;
};
export type RecipeSubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RecipeSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecipeSubmissionUpdateWithoutUserInput, Prisma.RecipeSubmissionUncheckedUpdateWithoutUserInput>;
};
export type RecipeSubmissionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RecipeSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.RecipeSubmissionUpdateManyMutationInput, Prisma.RecipeSubmissionUncheckedUpdateManyWithoutUserInput>;
};
export type RecipeSubmissionScalarWhereInput = {
    AND?: Prisma.RecipeSubmissionScalarWhereInput | Prisma.RecipeSubmissionScalarWhereInput[];
    OR?: Prisma.RecipeSubmissionScalarWhereInput[];
    NOT?: Prisma.RecipeSubmissionScalarWhereInput | Prisma.RecipeSubmissionScalarWhereInput[];
    id?: Prisma.StringFilter<"RecipeSubmission"> | string;
    imageUrl?: Prisma.StringFilter<"RecipeSubmission"> | string;
    score?: Prisma.FloatNullableFilter<"RecipeSubmission"> | number | null;
    feedback?: Prisma.StringNullableFilter<"RecipeSubmission"> | string | null;
    isFraud?: Prisma.BoolFilter<"RecipeSubmission"> | boolean;
    status?: Prisma.EnumSubmissionStatusFilter<"RecipeSubmission"> | $Enums.SubmissionStatus;
    caption?: Prisma.StringNullableFilter<"RecipeSubmission"> | string | null;
    visibility?: Prisma.EnumVisibilityFilter<"RecipeSubmission"> | $Enums.Visibility;
    likesCount?: Prisma.IntFilter<"RecipeSubmission"> | number;
    commentsCount?: Prisma.IntFilter<"RecipeSubmission"> | number;
    createdAt?: Prisma.DateTimeFilter<"RecipeSubmission"> | Date | string;
    userId?: Prisma.StringFilter<"RecipeSubmission"> | string;
    recipeId?: Prisma.StringFilter<"RecipeSubmission"> | string;
};
export type RecipeSubmissionCreateWithoutNotificationsInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSubmissionsInput;
    recipe: Prisma.RecipeCreateNestedOneWithoutSubmissionsInput;
    comments?: Prisma.CommentCreateNestedManyWithoutSubmissionInput;
    likes?: Prisma.LikeCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    userId: string;
    recipeId: string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutSubmissionInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.RecipeSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutNotificationsInput, Prisma.RecipeSubmissionUncheckedCreateWithoutNotificationsInput>;
};
export type RecipeSubmissionUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.RecipeSubmissionUpdateWithoutNotificationsInput, Prisma.RecipeSubmissionUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutNotificationsInput, Prisma.RecipeSubmissionUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.RecipeSubmissionWhereInput;
};
export type RecipeSubmissionUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.RecipeSubmissionWhereInput;
    data: Prisma.XOR<Prisma.RecipeSubmissionUpdateWithoutNotificationsInput, Prisma.RecipeSubmissionUncheckedUpdateWithoutNotificationsInput>;
};
export type RecipeSubmissionUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSubmissionsNestedInput;
    recipe?: Prisma.RecipeUpdateOneRequiredWithoutSubmissionsNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutSubmissionNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeId?: Prisma.StringFieldUpdateOperationsInput | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutSubmissionNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionCreateWithoutRecipeInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSubmissionsInput;
    comments?: Prisma.CommentCreateNestedManyWithoutSubmissionInput;
    likes?: Prisma.LikeCreateNestedManyWithoutSubmissionInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionUncheckedCreateWithoutRecipeInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    userId: string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutSubmissionInput;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutSubmissionInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionCreateOrConnectWithoutRecipeInput = {
    where: Prisma.RecipeSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutRecipeInput, Prisma.RecipeSubmissionUncheckedCreateWithoutRecipeInput>;
};
export type RecipeSubmissionCreateManyRecipeInputEnvelope = {
    data: Prisma.RecipeSubmissionCreateManyRecipeInput | Prisma.RecipeSubmissionCreateManyRecipeInput[];
    skipDuplicates?: boolean;
};
export type RecipeSubmissionUpsertWithWhereUniqueWithoutRecipeInput = {
    where: Prisma.RecipeSubmissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecipeSubmissionUpdateWithoutRecipeInput, Prisma.RecipeSubmissionUncheckedUpdateWithoutRecipeInput>;
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutRecipeInput, Prisma.RecipeSubmissionUncheckedCreateWithoutRecipeInput>;
};
export type RecipeSubmissionUpdateWithWhereUniqueWithoutRecipeInput = {
    where: Prisma.RecipeSubmissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecipeSubmissionUpdateWithoutRecipeInput, Prisma.RecipeSubmissionUncheckedUpdateWithoutRecipeInput>;
};
export type RecipeSubmissionUpdateManyWithWhereWithoutRecipeInput = {
    where: Prisma.RecipeSubmissionScalarWhereInput;
    data: Prisma.XOR<Prisma.RecipeSubmissionUpdateManyMutationInput, Prisma.RecipeSubmissionUncheckedUpdateManyWithoutRecipeInput>;
};
export type RecipeSubmissionCreateWithoutCommentsInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSubmissionsInput;
    recipe: Prisma.RecipeCreateNestedOneWithoutSubmissionsInput;
    likes?: Prisma.LikeCreateNestedManyWithoutSubmissionInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionUncheckedCreateWithoutCommentsInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    userId: string;
    recipeId: string;
    likes?: Prisma.LikeUncheckedCreateNestedManyWithoutSubmissionInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionCreateOrConnectWithoutCommentsInput = {
    where: Prisma.RecipeSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutCommentsInput, Prisma.RecipeSubmissionUncheckedCreateWithoutCommentsInput>;
};
export type RecipeSubmissionUpsertWithoutCommentsInput = {
    update: Prisma.XOR<Prisma.RecipeSubmissionUpdateWithoutCommentsInput, Prisma.RecipeSubmissionUncheckedUpdateWithoutCommentsInput>;
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutCommentsInput, Prisma.RecipeSubmissionUncheckedCreateWithoutCommentsInput>;
    where?: Prisma.RecipeSubmissionWhereInput;
};
export type RecipeSubmissionUpdateToOneWithWhereWithoutCommentsInput = {
    where?: Prisma.RecipeSubmissionWhereInput;
    data: Prisma.XOR<Prisma.RecipeSubmissionUpdateWithoutCommentsInput, Prisma.RecipeSubmissionUncheckedUpdateWithoutCommentsInput>;
};
export type RecipeSubmissionUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSubmissionsNestedInput;
    recipe?: Prisma.RecipeUpdateOneRequiredWithoutSubmissionsNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutSubmissionNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionUncheckedUpdateWithoutCommentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeId?: Prisma.StringFieldUpdateOperationsInput | string;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutSubmissionNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionCreateWithoutLikesInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSubmissionsInput;
    recipe: Prisma.RecipeCreateNestedOneWithoutSubmissionsInput;
    comments?: Prisma.CommentCreateNestedManyWithoutSubmissionInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionUncheckedCreateWithoutLikesInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    userId: string;
    recipeId: string;
    comments?: Prisma.CommentUncheckedCreateNestedManyWithoutSubmissionInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSubmissionInput;
};
export type RecipeSubmissionCreateOrConnectWithoutLikesInput = {
    where: Prisma.RecipeSubmissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutLikesInput, Prisma.RecipeSubmissionUncheckedCreateWithoutLikesInput>;
};
export type RecipeSubmissionUpsertWithoutLikesInput = {
    update: Prisma.XOR<Prisma.RecipeSubmissionUpdateWithoutLikesInput, Prisma.RecipeSubmissionUncheckedUpdateWithoutLikesInput>;
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateWithoutLikesInput, Prisma.RecipeSubmissionUncheckedCreateWithoutLikesInput>;
    where?: Prisma.RecipeSubmissionWhereInput;
};
export type RecipeSubmissionUpdateToOneWithWhereWithoutLikesInput = {
    where?: Prisma.RecipeSubmissionWhereInput;
    data: Prisma.XOR<Prisma.RecipeSubmissionUpdateWithoutLikesInput, Prisma.RecipeSubmissionUncheckedUpdateWithoutLikesInput>;
};
export type RecipeSubmissionUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSubmissionsNestedInput;
    recipe?: Prisma.RecipeUpdateOneRequiredWithoutSubmissionsNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutSubmissionNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionUncheckedUpdateWithoutLikesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeId?: Prisma.StringFieldUpdateOperationsInput | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutSubmissionNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionCreateManyUserInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    recipeId: string;
};
export type RecipeSubmissionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recipe?: Prisma.RecipeUpdateOneRequiredWithoutSubmissionsNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutSubmissionNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutSubmissionNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recipeId?: Prisma.StringFieldUpdateOperationsInput | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutSubmissionNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutSubmissionNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    recipeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RecipeSubmissionCreateManyRecipeInput = {
    id?: string;
    imageUrl: string;
    score?: number | null;
    feedback?: string | null;
    isFraud?: boolean;
    status?: $Enums.SubmissionStatus;
    caption?: string | null;
    visibility?: $Enums.Visibility;
    likesCount?: number;
    commentsCount?: number;
    createdAt?: Date | string;
    userId: string;
};
export type RecipeSubmissionUpdateWithoutRecipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSubmissionsNestedInput;
    comments?: Prisma.CommentUpdateManyWithoutSubmissionNestedInput;
    likes?: Prisma.LikeUpdateManyWithoutSubmissionNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionUncheckedUpdateWithoutRecipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    comments?: Prisma.CommentUncheckedUpdateManyWithoutSubmissionNestedInput;
    likes?: Prisma.LikeUncheckedUpdateManyWithoutSubmissionNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSubmissionNestedInput;
};
export type RecipeSubmissionUncheckedUpdateManyWithoutRecipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    score?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    feedback?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isFraud?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    status?: Prisma.EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    visibility?: Prisma.EnumVisibilityFieldUpdateOperationsInput | $Enums.Visibility;
    likesCount?: Prisma.IntFieldUpdateOperationsInput | number;
    commentsCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type RecipeSubmissionCountOutputType
 */
export type RecipeSubmissionCountOutputType = {
    comments: number;
    likes: number;
    notifications: number;
};
export type RecipeSubmissionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comments?: boolean | RecipeSubmissionCountOutputTypeCountCommentsArgs;
    likes?: boolean | RecipeSubmissionCountOutputTypeCountLikesArgs;
    notifications?: boolean | RecipeSubmissionCountOutputTypeCountNotificationsArgs;
};
/**
 * RecipeSubmissionCountOutputType without action
 */
export type RecipeSubmissionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmissionCountOutputType
     */
    select?: Prisma.RecipeSubmissionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RecipeSubmissionCountOutputType without action
 */
export type RecipeSubmissionCountOutputTypeCountCommentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommentWhereInput;
};
/**
 * RecipeSubmissionCountOutputType without action
 */
export type RecipeSubmissionCountOutputTypeCountLikesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LikeWhereInput;
};
/**
 * RecipeSubmissionCountOutputType without action
 */
export type RecipeSubmissionCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type RecipeSubmissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    imageUrl?: boolean;
    score?: boolean;
    feedback?: boolean;
    isFraud?: boolean;
    status?: boolean;
    caption?: boolean;
    visibility?: boolean;
    likesCount?: boolean;
    commentsCount?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    recipeId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
    comments?: boolean | Prisma.RecipeSubmission$commentsArgs<ExtArgs>;
    likes?: boolean | Prisma.RecipeSubmission$likesArgs<ExtArgs>;
    notifications?: boolean | Prisma.RecipeSubmission$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecipeSubmissionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recipeSubmission"]>;
export type RecipeSubmissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    imageUrl?: boolean;
    score?: boolean;
    feedback?: boolean;
    isFraud?: boolean;
    status?: boolean;
    caption?: boolean;
    visibility?: boolean;
    likesCount?: boolean;
    commentsCount?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    recipeId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recipeSubmission"]>;
export type RecipeSubmissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    imageUrl?: boolean;
    score?: boolean;
    feedback?: boolean;
    isFraud?: boolean;
    status?: boolean;
    caption?: boolean;
    visibility?: boolean;
    likesCount?: boolean;
    commentsCount?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    recipeId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recipeSubmission"]>;
export type RecipeSubmissionSelectScalar = {
    id?: boolean;
    imageUrl?: boolean;
    score?: boolean;
    feedback?: boolean;
    isFraud?: boolean;
    status?: boolean;
    caption?: boolean;
    visibility?: boolean;
    likesCount?: boolean;
    commentsCount?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    recipeId?: boolean;
};
export type RecipeSubmissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "imageUrl" | "score" | "feedback" | "isFraud" | "status" | "caption" | "visibility" | "likesCount" | "commentsCount" | "createdAt" | "userId" | "recipeId", ExtArgs["result"]["recipeSubmission"]>;
export type RecipeSubmissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
    comments?: boolean | Prisma.RecipeSubmission$commentsArgs<ExtArgs>;
    likes?: boolean | Prisma.RecipeSubmission$likesArgs<ExtArgs>;
    notifications?: boolean | Prisma.RecipeSubmission$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecipeSubmissionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RecipeSubmissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
};
export type RecipeSubmissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
};
export type $RecipeSubmissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RecipeSubmission";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        recipe: Prisma.$RecipePayload<ExtArgs>;
        comments: Prisma.$CommentPayload<ExtArgs>[];
        likes: Prisma.$LikePayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        imageUrl: string;
        score: number | null;
        feedback: string | null;
        isFraud: boolean;
        status: $Enums.SubmissionStatus;
        caption: string | null;
        visibility: $Enums.Visibility;
        likesCount: number;
        commentsCount: number;
        createdAt: Date;
        userId: string;
        recipeId: string;
    }, ExtArgs["result"]["recipeSubmission"]>;
    composites: {};
};
export type RecipeSubmissionGetPayload<S extends boolean | null | undefined | RecipeSubmissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload, S>;
export type RecipeSubmissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RecipeSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RecipeSubmissionCountAggregateInputType | true;
};
export interface RecipeSubmissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RecipeSubmission'];
        meta: {
            name: 'RecipeSubmission';
        };
    };
    /**
     * Find zero or one RecipeSubmission that matches the filter.
     * @param {RecipeSubmissionFindUniqueArgs} args - Arguments to find a RecipeSubmission
     * @example
     * // Get one RecipeSubmission
     * const recipeSubmission = await prisma.recipeSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeSubmissionFindUniqueArgs>(args: Prisma.SelectSubset<T, RecipeSubmissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RecipeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RecipeSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeSubmissionFindUniqueOrThrowArgs} args - Arguments to find a RecipeSubmission
     * @example
     * // Get one RecipeSubmission
     * const recipeSubmission = await prisma.recipeSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeSubmissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RecipeSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecipeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RecipeSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeSubmissionFindFirstArgs} args - Arguments to find a RecipeSubmission
     * @example
     * // Get one RecipeSubmission
     * const recipeSubmission = await prisma.recipeSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeSubmissionFindFirstArgs>(args?: Prisma.SelectSubset<T, RecipeSubmissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__RecipeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RecipeSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeSubmissionFindFirstOrThrowArgs} args - Arguments to find a RecipeSubmission
     * @example
     * // Get one RecipeSubmission
     * const recipeSubmission = await prisma.recipeSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeSubmissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RecipeSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecipeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RecipeSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeSubmissions
     * const recipeSubmissions = await prisma.recipeSubmission.findMany()
     *
     * // Get first 10 RecipeSubmissions
     * const recipeSubmissions = await prisma.recipeSubmission.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recipeSubmissionWithIdOnly = await prisma.recipeSubmission.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RecipeSubmissionFindManyArgs>(args?: Prisma.SelectSubset<T, RecipeSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RecipeSubmission.
     * @param {RecipeSubmissionCreateArgs} args - Arguments to create a RecipeSubmission.
     * @example
     * // Create one RecipeSubmission
     * const RecipeSubmission = await prisma.recipeSubmission.create({
     *   data: {
     *     // ... data to create a RecipeSubmission
     *   }
     * })
     *
     */
    create<T extends RecipeSubmissionCreateArgs>(args: Prisma.SelectSubset<T, RecipeSubmissionCreateArgs<ExtArgs>>): Prisma.Prisma__RecipeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RecipeSubmissions.
     * @param {RecipeSubmissionCreateManyArgs} args - Arguments to create many RecipeSubmissions.
     * @example
     * // Create many RecipeSubmissions
     * const recipeSubmission = await prisma.recipeSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecipeSubmissionCreateManyArgs>(args?: Prisma.SelectSubset<T, RecipeSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RecipeSubmissions and returns the data saved in the database.
     * @param {RecipeSubmissionCreateManyAndReturnArgs} args - Arguments to create many RecipeSubmissions.
     * @example
     * // Create many RecipeSubmissions
     * const recipeSubmission = await prisma.recipeSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RecipeSubmissions and only return the `id`
     * const recipeSubmissionWithIdOnly = await prisma.recipeSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RecipeSubmissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RecipeSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RecipeSubmission.
     * @param {RecipeSubmissionDeleteArgs} args - Arguments to delete one RecipeSubmission.
     * @example
     * // Delete one RecipeSubmission
     * const RecipeSubmission = await prisma.recipeSubmission.delete({
     *   where: {
     *     // ... filter to delete one RecipeSubmission
     *   }
     * })
     *
     */
    delete<T extends RecipeSubmissionDeleteArgs>(args: Prisma.SelectSubset<T, RecipeSubmissionDeleteArgs<ExtArgs>>): Prisma.Prisma__RecipeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RecipeSubmission.
     * @param {RecipeSubmissionUpdateArgs} args - Arguments to update one RecipeSubmission.
     * @example
     * // Update one RecipeSubmission
     * const recipeSubmission = await prisma.recipeSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecipeSubmissionUpdateArgs>(args: Prisma.SelectSubset<T, RecipeSubmissionUpdateArgs<ExtArgs>>): Prisma.Prisma__RecipeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RecipeSubmissions.
     * @param {RecipeSubmissionDeleteManyArgs} args - Arguments to filter RecipeSubmissions to delete.
     * @example
     * // Delete a few RecipeSubmissions
     * const { count } = await prisma.recipeSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecipeSubmissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, RecipeSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RecipeSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeSubmissions
     * const recipeSubmission = await prisma.recipeSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecipeSubmissionUpdateManyArgs>(args: Prisma.SelectSubset<T, RecipeSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RecipeSubmissions and returns the data updated in the database.
     * @param {RecipeSubmissionUpdateManyAndReturnArgs} args - Arguments to update many RecipeSubmissions.
     * @example
     * // Update many RecipeSubmissions
     * const recipeSubmission = await prisma.recipeSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RecipeSubmissions and only return the `id`
     * const recipeSubmissionWithIdOnly = await prisma.recipeSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RecipeSubmissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RecipeSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RecipeSubmission.
     * @param {RecipeSubmissionUpsertArgs} args - Arguments to update or create a RecipeSubmission.
     * @example
     * // Update or create a RecipeSubmission
     * const recipeSubmission = await prisma.recipeSubmission.upsert({
     *   create: {
     *     // ... data to create a RecipeSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeSubmission we want to update
     *   }
     * })
     */
    upsert<T extends RecipeSubmissionUpsertArgs>(args: Prisma.SelectSubset<T, RecipeSubmissionUpsertArgs<ExtArgs>>): Prisma.Prisma__RecipeSubmissionClient<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RecipeSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeSubmissionCountArgs} args - Arguments to filter RecipeSubmissions to count.
     * @example
     * // Count the number of RecipeSubmissions
     * const count = await prisma.recipeSubmission.count({
     *   where: {
     *     // ... the filter for the RecipeSubmissions we want to count
     *   }
     * })
    **/
    count<T extends RecipeSubmissionCountArgs>(args?: Prisma.Subset<T, RecipeSubmissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RecipeSubmissionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RecipeSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipeSubmissionAggregateArgs>(args: Prisma.Subset<T, RecipeSubmissionAggregateArgs>): Prisma.PrismaPromise<GetRecipeSubmissionAggregateType<T>>;
    /**
     * Group by RecipeSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends RecipeSubmissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RecipeSubmissionGroupByArgs['orderBy'];
    } : {
        orderBy?: RecipeSubmissionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RecipeSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RecipeSubmission model
     */
    readonly fields: RecipeSubmissionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RecipeSubmission.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RecipeSubmissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    recipe<T extends Prisma.RecipeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RecipeDefaultArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    comments<T extends Prisma.RecipeSubmission$commentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RecipeSubmission$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    likes<T extends Prisma.RecipeSubmission$likesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RecipeSubmission$likesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.RecipeSubmission$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RecipeSubmission$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the RecipeSubmission model
 */
export interface RecipeSubmissionFieldRefs {
    readonly id: Prisma.FieldRef<"RecipeSubmission", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"RecipeSubmission", 'String'>;
    readonly score: Prisma.FieldRef<"RecipeSubmission", 'Float'>;
    readonly feedback: Prisma.FieldRef<"RecipeSubmission", 'String'>;
    readonly isFraud: Prisma.FieldRef<"RecipeSubmission", 'Boolean'>;
    readonly status: Prisma.FieldRef<"RecipeSubmission", 'SubmissionStatus'>;
    readonly caption: Prisma.FieldRef<"RecipeSubmission", 'String'>;
    readonly visibility: Prisma.FieldRef<"RecipeSubmission", 'Visibility'>;
    readonly likesCount: Prisma.FieldRef<"RecipeSubmission", 'Int'>;
    readonly commentsCount: Prisma.FieldRef<"RecipeSubmission", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"RecipeSubmission", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"RecipeSubmission", 'String'>;
    readonly recipeId: Prisma.FieldRef<"RecipeSubmission", 'String'>;
}
/**
 * RecipeSubmission findUnique
 */
export type RecipeSubmissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which RecipeSubmission to fetch.
     */
    where: Prisma.RecipeSubmissionWhereUniqueInput;
};
/**
 * RecipeSubmission findUniqueOrThrow
 */
export type RecipeSubmissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which RecipeSubmission to fetch.
     */
    where: Prisma.RecipeSubmissionWhereUniqueInput;
};
/**
 * RecipeSubmission findFirst
 */
export type RecipeSubmissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which RecipeSubmission to fetch.
     */
    where?: Prisma.RecipeSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecipeSubmissions to fetch.
     */
    orderBy?: Prisma.RecipeSubmissionOrderByWithRelationInput | Prisma.RecipeSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecipeSubmissions.
     */
    cursor?: Prisma.RecipeSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecipeSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecipeSubmissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecipeSubmissions.
     */
    distinct?: Prisma.RecipeSubmissionScalarFieldEnum | Prisma.RecipeSubmissionScalarFieldEnum[];
};
/**
 * RecipeSubmission findFirstOrThrow
 */
export type RecipeSubmissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which RecipeSubmission to fetch.
     */
    where?: Prisma.RecipeSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecipeSubmissions to fetch.
     */
    orderBy?: Prisma.RecipeSubmissionOrderByWithRelationInput | Prisma.RecipeSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecipeSubmissions.
     */
    cursor?: Prisma.RecipeSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecipeSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecipeSubmissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecipeSubmissions.
     */
    distinct?: Prisma.RecipeSubmissionScalarFieldEnum | Prisma.RecipeSubmissionScalarFieldEnum[];
};
/**
 * RecipeSubmission findMany
 */
export type RecipeSubmissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionInclude<ExtArgs> | null;
    /**
     * Filter, which RecipeSubmissions to fetch.
     */
    where?: Prisma.RecipeSubmissionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecipeSubmissions to fetch.
     */
    orderBy?: Prisma.RecipeSubmissionOrderByWithRelationInput | Prisma.RecipeSubmissionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RecipeSubmissions.
     */
    cursor?: Prisma.RecipeSubmissionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecipeSubmissions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecipeSubmissions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecipeSubmissions.
     */
    distinct?: Prisma.RecipeSubmissionScalarFieldEnum | Prisma.RecipeSubmissionScalarFieldEnum[];
};
/**
 * RecipeSubmission create
 */
export type RecipeSubmissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionInclude<ExtArgs> | null;
    /**
     * The data needed to create a RecipeSubmission.
     */
    data: Prisma.XOR<Prisma.RecipeSubmissionCreateInput, Prisma.RecipeSubmissionUncheckedCreateInput>;
};
/**
 * RecipeSubmission createMany
 */
export type RecipeSubmissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeSubmissions.
     */
    data: Prisma.RecipeSubmissionCreateManyInput | Prisma.RecipeSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RecipeSubmission createManyAndReturn
 */
export type RecipeSubmissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * The data used to create many RecipeSubmissions.
     */
    data: Prisma.RecipeSubmissionCreateManyInput | Prisma.RecipeSubmissionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * RecipeSubmission update
 */
export type RecipeSubmissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionInclude<ExtArgs> | null;
    /**
     * The data needed to update a RecipeSubmission.
     */
    data: Prisma.XOR<Prisma.RecipeSubmissionUpdateInput, Prisma.RecipeSubmissionUncheckedUpdateInput>;
    /**
     * Choose, which RecipeSubmission to update.
     */
    where: Prisma.RecipeSubmissionWhereUniqueInput;
};
/**
 * RecipeSubmission updateMany
 */
export type RecipeSubmissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeSubmissions.
     */
    data: Prisma.XOR<Prisma.RecipeSubmissionUpdateManyMutationInput, Prisma.RecipeSubmissionUncheckedUpdateManyInput>;
    /**
     * Filter which RecipeSubmissions to update
     */
    where?: Prisma.RecipeSubmissionWhereInput;
    /**
     * Limit how many RecipeSubmissions to update.
     */
    limit?: number;
};
/**
 * RecipeSubmission updateManyAndReturn
 */
export type RecipeSubmissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * The data used to update RecipeSubmissions.
     */
    data: Prisma.XOR<Prisma.RecipeSubmissionUpdateManyMutationInput, Prisma.RecipeSubmissionUncheckedUpdateManyInput>;
    /**
     * Filter which RecipeSubmissions to update
     */
    where?: Prisma.RecipeSubmissionWhereInput;
    /**
     * Limit how many RecipeSubmissions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * RecipeSubmission upsert
 */
export type RecipeSubmissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionInclude<ExtArgs> | null;
    /**
     * The filter to search for the RecipeSubmission to update in case it exists.
     */
    where: Prisma.RecipeSubmissionWhereUniqueInput;
    /**
     * In case the RecipeSubmission found by the `where` argument doesn't exist, create a new RecipeSubmission with this data.
     */
    create: Prisma.XOR<Prisma.RecipeSubmissionCreateInput, Prisma.RecipeSubmissionUncheckedCreateInput>;
    /**
     * In case the RecipeSubmission was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RecipeSubmissionUpdateInput, Prisma.RecipeSubmissionUncheckedUpdateInput>;
};
/**
 * RecipeSubmission delete
 */
export type RecipeSubmissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionInclude<ExtArgs> | null;
    /**
     * Filter which RecipeSubmission to delete.
     */
    where: Prisma.RecipeSubmissionWhereUniqueInput;
};
/**
 * RecipeSubmission deleteMany
 */
export type RecipeSubmissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeSubmissions to delete
     */
    where?: Prisma.RecipeSubmissionWhereInput;
    /**
     * Limit how many RecipeSubmissions to delete.
     */
    limit?: number;
};
/**
 * RecipeSubmission.comments
 */
export type RecipeSubmission$commentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: Prisma.CommentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Comment
     */
    omit?: Prisma.CommentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CommentInclude<ExtArgs> | null;
    where?: Prisma.CommentWhereInput;
    orderBy?: Prisma.CommentOrderByWithRelationInput | Prisma.CommentOrderByWithRelationInput[];
    cursor?: Prisma.CommentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CommentScalarFieldEnum | Prisma.CommentScalarFieldEnum[];
};
/**
 * RecipeSubmission.likes
 */
export type RecipeSubmission$likesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: Prisma.LikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Like
     */
    omit?: Prisma.LikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.LikeInclude<ExtArgs> | null;
    where?: Prisma.LikeWhereInput;
    orderBy?: Prisma.LikeOrderByWithRelationInput | Prisma.LikeOrderByWithRelationInput[];
    cursor?: Prisma.LikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LikeScalarFieldEnum | Prisma.LikeScalarFieldEnum[];
};
/**
 * RecipeSubmission.notifications
 */
export type RecipeSubmission$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * RecipeSubmission without action
 */
export type RecipeSubmissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeSubmission
     */
    select?: Prisma.RecipeSubmissionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecipeSubmission
     */
    omit?: Prisma.RecipeSubmissionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeSubmissionInclude<ExtArgs> | null;
};
//# sourceMappingURL=RecipeSubmission.d.ts.map