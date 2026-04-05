import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Recipe
 *
 */
export type RecipeModel = runtime.Types.Result.DefaultSelection<Prisma.$RecipePayload>;
export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null;
    _min: RecipeMinAggregateOutputType | null;
    _max: RecipeMaxAggregateOutputType | null;
};
export type RecipeMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    imageUrl: string | null;
    category: string | null;
    difficulty: string | null;
    source: $Enums.RecipeSource | null;
    externalId: string | null;
    cachedAt: Date | null;
    createdAt: Date | null;
    userId: string | null;
};
export type RecipeMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    imageUrl: string | null;
    category: string | null;
    difficulty: string | null;
    source: $Enums.RecipeSource | null;
    externalId: string | null;
    cachedAt: Date | null;
    createdAt: Date | null;
    userId: string | null;
};
export type RecipeCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    imageUrl: number;
    category: number;
    difficulty: number;
    source: number;
    externalId: number;
    cachedAt: number;
    createdAt: number;
    userId: number;
    _all: number;
};
export type RecipeMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    imageUrl?: true;
    category?: true;
    difficulty?: true;
    source?: true;
    externalId?: true;
    cachedAt?: true;
    createdAt?: true;
    userId?: true;
};
export type RecipeMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    imageUrl?: true;
    category?: true;
    difficulty?: true;
    source?: true;
    externalId?: true;
    cachedAt?: true;
    createdAt?: true;
    userId?: true;
};
export type RecipeCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    imageUrl?: true;
    category?: true;
    difficulty?: true;
    source?: true;
    externalId?: true;
    cachedAt?: true;
    createdAt?: true;
    userId?: true;
    _all?: true;
};
export type RecipeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RecipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType;
};
export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
    [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRecipe[P]> : Prisma.GetScalarType<T[P], AggregateRecipe[P]>;
};
export type RecipeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeWhereInput;
    orderBy?: Prisma.RecipeOrderByWithAggregationInput | Prisma.RecipeOrderByWithAggregationInput[];
    by: Prisma.RecipeScalarFieldEnum[] | Prisma.RecipeScalarFieldEnum;
    having?: Prisma.RecipeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecipeCountAggregateInputType | true;
    _min?: RecipeMinAggregateInputType;
    _max?: RecipeMaxAggregateInputType;
};
export type RecipeGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    imageUrl: string | null;
    category: string | null;
    difficulty: string | null;
    source: $Enums.RecipeSource;
    externalId: string | null;
    cachedAt: Date | null;
    createdAt: Date;
    userId: string | null;
    _count: RecipeCountAggregateOutputType | null;
    _min: RecipeMinAggregateOutputType | null;
    _max: RecipeMaxAggregateOutputType | null;
};
export type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RecipeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RecipeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RecipeGroupByOutputType[P]>;
}>>;
export type RecipeWhereInput = {
    AND?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    OR?: Prisma.RecipeWhereInput[];
    NOT?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    id?: Prisma.StringFilter<"Recipe"> | string;
    title?: Prisma.StringFilter<"Recipe"> | string;
    description?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    imageUrl?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    category?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    difficulty?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    source?: Prisma.EnumRecipeSourceFilter<"Recipe"> | $Enums.RecipeSource;
    externalId?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    cachedAt?: Prisma.DateTimeNullableFilter<"Recipe"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Recipe"> | Date | string;
    userId?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    ingredients?: Prisma.IngredientListRelationFilter;
    steps?: Prisma.StepListRelationFilter;
    submissions?: Prisma.RecipeSubmissionListRelationFilter;
};
export type RecipeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    difficulty?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cachedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    ingredients?: Prisma.IngredientOrderByRelationAggregateInput;
    steps?: Prisma.StepOrderByRelationAggregateInput;
    submissions?: Prisma.RecipeSubmissionOrderByRelationAggregateInput;
};
export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    OR?: Prisma.RecipeWhereInput[];
    NOT?: Prisma.RecipeWhereInput | Prisma.RecipeWhereInput[];
    title?: Prisma.StringFilter<"Recipe"> | string;
    description?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    imageUrl?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    category?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    difficulty?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    source?: Prisma.EnumRecipeSourceFilter<"Recipe"> | $Enums.RecipeSource;
    externalId?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    cachedAt?: Prisma.DateTimeNullableFilter<"Recipe"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Recipe"> | Date | string;
    userId?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    ingredients?: Prisma.IngredientListRelationFilter;
    steps?: Prisma.StepListRelationFilter;
    submissions?: Prisma.RecipeSubmissionListRelationFilter;
}, "id">;
export type RecipeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    category?: Prisma.SortOrderInput | Prisma.SortOrder;
    difficulty?: Prisma.SortOrderInput | Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cachedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RecipeCountOrderByAggregateInput;
    _max?: Prisma.RecipeMaxOrderByAggregateInput;
    _min?: Prisma.RecipeMinOrderByAggregateInput;
};
export type RecipeScalarWhereWithAggregatesInput = {
    AND?: Prisma.RecipeScalarWhereWithAggregatesInput | Prisma.RecipeScalarWhereWithAggregatesInput[];
    OR?: Prisma.RecipeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RecipeScalarWhereWithAggregatesInput | Prisma.RecipeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Recipe"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Recipe"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Recipe"> | string | null;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"Recipe"> | string | null;
    category?: Prisma.StringNullableWithAggregatesFilter<"Recipe"> | string | null;
    difficulty?: Prisma.StringNullableWithAggregatesFilter<"Recipe"> | string | null;
    source?: Prisma.EnumRecipeSourceWithAggregatesFilter<"Recipe"> | $Enums.RecipeSource;
    externalId?: Prisma.StringNullableWithAggregatesFilter<"Recipe"> | string | null;
    cachedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Recipe"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Recipe"> | Date | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"Recipe"> | string | null;
};
export type RecipeCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.IngredientCreateNestedManyWithoutRecipeInput;
    steps?: Prisma.StepCreateNestedManyWithoutRecipeInput;
    submissions?: Prisma.RecipeSubmissionCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    userId?: string | null;
    ingredients?: Prisma.IngredientUncheckedCreateNestedManyWithoutRecipeInput;
    steps?: Prisma.StepUncheckedCreateNestedManyWithoutRecipeInput;
    submissions?: Prisma.RecipeSubmissionUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutRecipesNestedInput;
    ingredients?: Prisma.IngredientUpdateManyWithoutRecipeNestedInput;
    steps?: Prisma.StepUpdateManyWithoutRecipeNestedInput;
    submissions?: Prisma.RecipeSubmissionUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ingredients?: Prisma.IngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    steps?: Prisma.StepUncheckedUpdateManyWithoutRecipeNestedInput;
    submissions?: Prisma.RecipeSubmissionUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    userId?: string | null;
};
export type RecipeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecipeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RecipeListRelationFilter = {
    every?: Prisma.RecipeWhereInput;
    some?: Prisma.RecipeWhereInput;
    none?: Prisma.RecipeWhereInput;
};
export type RecipeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RecipeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalId?: Prisma.SortOrder;
    cachedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RecipeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalId?: Prisma.SortOrder;
    cachedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RecipeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    difficulty?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    externalId?: Prisma.SortOrder;
    cachedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type RecipeScalarRelationFilter = {
    is?: Prisma.RecipeWhereInput;
    isNot?: Prisma.RecipeWhereInput;
};
export type RecipeCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
};
export type RecipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
};
export type RecipeUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput | Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    set?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    disconnect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    delete?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    update?: Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput | Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RecipeUpdateManyWithWhereWithoutUserInput | Prisma.RecipeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
};
export type RecipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput> | Prisma.RecipeCreateWithoutUserInput[] | Prisma.RecipeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutUserInput | Prisma.RecipeCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput | Prisma.RecipeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RecipeCreateManyUserInputEnvelope;
    set?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    disconnect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    delete?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    connect?: Prisma.RecipeWhereUniqueInput | Prisma.RecipeWhereUniqueInput[];
    update?: Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput | Prisma.RecipeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RecipeUpdateManyWithWhereWithoutUserInput | Prisma.RecipeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
};
export type EnumRecipeSourceFieldUpdateOperationsInput = {
    set?: $Enums.RecipeSource;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type RecipeCreateNestedOneWithoutIngredientsInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutIngredientsInput, Prisma.RecipeUncheckedCreateWithoutIngredientsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutIngredientsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
};
export type RecipeUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutIngredientsInput, Prisma.RecipeUncheckedCreateWithoutIngredientsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutIngredientsInput;
    upsert?: Prisma.RecipeUpsertWithoutIngredientsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeUpdateToOneWithWhereWithoutIngredientsInput, Prisma.RecipeUpdateWithoutIngredientsInput>, Prisma.RecipeUncheckedUpdateWithoutIngredientsInput>;
};
export type RecipeCreateNestedOneWithoutStepsInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutStepsInput, Prisma.RecipeUncheckedCreateWithoutStepsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutStepsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
};
export type RecipeUpdateOneRequiredWithoutStepsNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutStepsInput, Prisma.RecipeUncheckedCreateWithoutStepsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutStepsInput;
    upsert?: Prisma.RecipeUpsertWithoutStepsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeUpdateToOneWithWhereWithoutStepsInput, Prisma.RecipeUpdateWithoutStepsInput>, Prisma.RecipeUncheckedUpdateWithoutStepsInput>;
};
export type RecipeCreateNestedOneWithoutSubmissionsInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutSubmissionsInput, Prisma.RecipeUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutSubmissionsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
};
export type RecipeUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.RecipeCreateWithoutSubmissionsInput, Prisma.RecipeUncheckedCreateWithoutSubmissionsInput>;
    connectOrCreate?: Prisma.RecipeCreateOrConnectWithoutSubmissionsInput;
    upsert?: Prisma.RecipeUpsertWithoutSubmissionsInput;
    connect?: Prisma.RecipeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RecipeUpdateToOneWithWhereWithoutSubmissionsInput, Prisma.RecipeUpdateWithoutSubmissionsInput>, Prisma.RecipeUncheckedUpdateWithoutSubmissionsInput>;
};
export type RecipeCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    ingredients?: Prisma.IngredientCreateNestedManyWithoutRecipeInput;
    steps?: Prisma.StepCreateNestedManyWithoutRecipeInput;
    submissions?: Prisma.RecipeSubmissionCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    ingredients?: Prisma.IngredientUncheckedCreateNestedManyWithoutRecipeInput;
    steps?: Prisma.StepUncheckedCreateNestedManyWithoutRecipeInput;
    submissions?: Prisma.RecipeSubmissionUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutUserInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput>;
};
export type RecipeCreateManyUserInputEnvelope = {
    data: Prisma.RecipeCreateManyUserInput | Prisma.RecipeCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RecipeUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RecipeWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutUserInput, Prisma.RecipeUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutUserInput, Prisma.RecipeUncheckedCreateWithoutUserInput>;
};
export type RecipeUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RecipeWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutUserInput, Prisma.RecipeUncheckedUpdateWithoutUserInput>;
};
export type RecipeUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RecipeScalarWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyWithoutUserInput>;
};
export type RecipeScalarWhereInput = {
    AND?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
    OR?: Prisma.RecipeScalarWhereInput[];
    NOT?: Prisma.RecipeScalarWhereInput | Prisma.RecipeScalarWhereInput[];
    id?: Prisma.StringFilter<"Recipe"> | string;
    title?: Prisma.StringFilter<"Recipe"> | string;
    description?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    imageUrl?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    category?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    difficulty?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    source?: Prisma.EnumRecipeSourceFilter<"Recipe"> | $Enums.RecipeSource;
    externalId?: Prisma.StringNullableFilter<"Recipe"> | string | null;
    cachedAt?: Prisma.DateTimeNullableFilter<"Recipe"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Recipe"> | Date | string;
    userId?: Prisma.StringNullableFilter<"Recipe"> | string | null;
};
export type RecipeCreateWithoutIngredientsInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutRecipesInput;
    steps?: Prisma.StepCreateNestedManyWithoutRecipeInput;
    submissions?: Prisma.RecipeSubmissionCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutIngredientsInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    userId?: string | null;
    steps?: Prisma.StepUncheckedCreateNestedManyWithoutRecipeInput;
    submissions?: Prisma.RecipeSubmissionUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutIngredientsInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutIngredientsInput, Prisma.RecipeUncheckedCreateWithoutIngredientsInput>;
};
export type RecipeUpsertWithoutIngredientsInput = {
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutIngredientsInput, Prisma.RecipeUncheckedUpdateWithoutIngredientsInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutIngredientsInput, Prisma.RecipeUncheckedCreateWithoutIngredientsInput>;
    where?: Prisma.RecipeWhereInput;
};
export type RecipeUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: Prisma.RecipeWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutIngredientsInput, Prisma.RecipeUncheckedUpdateWithoutIngredientsInput>;
};
export type RecipeUpdateWithoutIngredientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutRecipesNestedInput;
    steps?: Prisma.StepUpdateManyWithoutRecipeNestedInput;
    submissions?: Prisma.RecipeSubmissionUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutIngredientsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    steps?: Prisma.StepUncheckedUpdateManyWithoutRecipeNestedInput;
    submissions?: Prisma.RecipeSubmissionUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeCreateWithoutStepsInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.IngredientCreateNestedManyWithoutRecipeInput;
    submissions?: Prisma.RecipeSubmissionCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutStepsInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    userId?: string | null;
    ingredients?: Prisma.IngredientUncheckedCreateNestedManyWithoutRecipeInput;
    submissions?: Prisma.RecipeSubmissionUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutStepsInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutStepsInput, Prisma.RecipeUncheckedCreateWithoutStepsInput>;
};
export type RecipeUpsertWithoutStepsInput = {
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutStepsInput, Prisma.RecipeUncheckedUpdateWithoutStepsInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutStepsInput, Prisma.RecipeUncheckedCreateWithoutStepsInput>;
    where?: Prisma.RecipeWhereInput;
};
export type RecipeUpdateToOneWithWhereWithoutStepsInput = {
    where?: Prisma.RecipeWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutStepsInput, Prisma.RecipeUncheckedUpdateWithoutStepsInput>;
};
export type RecipeUpdateWithoutStepsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutRecipesNestedInput;
    ingredients?: Prisma.IngredientUpdateManyWithoutRecipeNestedInput;
    submissions?: Prisma.RecipeSubmissionUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutStepsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ingredients?: Prisma.IngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    submissions?: Prisma.RecipeSubmissionUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeCreateWithoutSubmissionsInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutRecipesInput;
    ingredients?: Prisma.IngredientCreateNestedManyWithoutRecipeInput;
    steps?: Prisma.StepCreateNestedManyWithoutRecipeInput;
};
export type RecipeUncheckedCreateWithoutSubmissionsInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
    userId?: string | null;
    ingredients?: Prisma.IngredientUncheckedCreateNestedManyWithoutRecipeInput;
    steps?: Prisma.StepUncheckedCreateNestedManyWithoutRecipeInput;
};
export type RecipeCreateOrConnectWithoutSubmissionsInput = {
    where: Prisma.RecipeWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutSubmissionsInput, Prisma.RecipeUncheckedCreateWithoutSubmissionsInput>;
};
export type RecipeUpsertWithoutSubmissionsInput = {
    update: Prisma.XOR<Prisma.RecipeUpdateWithoutSubmissionsInput, Prisma.RecipeUncheckedUpdateWithoutSubmissionsInput>;
    create: Prisma.XOR<Prisma.RecipeCreateWithoutSubmissionsInput, Prisma.RecipeUncheckedCreateWithoutSubmissionsInput>;
    where?: Prisma.RecipeWhereInput;
};
export type RecipeUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: Prisma.RecipeWhereInput;
    data: Prisma.XOR<Prisma.RecipeUpdateWithoutSubmissionsInput, Prisma.RecipeUncheckedUpdateWithoutSubmissionsInput>;
};
export type RecipeUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutRecipesNestedInput;
    ingredients?: Prisma.IngredientUpdateManyWithoutRecipeNestedInput;
    steps?: Prisma.StepUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ingredients?: Prisma.IngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    steps?: Prisma.StepUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    imageUrl?: string | null;
    category?: string | null;
    difficulty?: string | null;
    source: $Enums.RecipeSource;
    externalId?: string | null;
    cachedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type RecipeUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: Prisma.IngredientUpdateManyWithoutRecipeNestedInput;
    steps?: Prisma.StepUpdateManyWithoutRecipeNestedInput;
    submissions?: Prisma.RecipeSubmissionUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: Prisma.IngredientUncheckedUpdateManyWithoutRecipeNestedInput;
    steps?: Prisma.StepUncheckedUpdateManyWithoutRecipeNestedInput;
    submissions?: Prisma.RecipeSubmissionUncheckedUpdateManyWithoutRecipeNestedInput;
};
export type RecipeUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    category?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    difficulty?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    source?: Prisma.EnumRecipeSourceFieldUpdateOperationsInput | $Enums.RecipeSource;
    externalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cachedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type RecipeCountOutputType
 */
export type RecipeCountOutputType = {
    ingredients: number;
    steps: number;
    submissions: number;
};
export type RecipeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ingredients?: boolean | RecipeCountOutputTypeCountIngredientsArgs;
    steps?: boolean | RecipeCountOutputTypeCountStepsArgs;
    submissions?: boolean | RecipeCountOutputTypeCountSubmissionsArgs;
};
/**
 * RecipeCountOutputType without action
 */
export type RecipeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: Prisma.RecipeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RecipeCountOutputType without action
 */
export type RecipeCountOutputTypeCountIngredientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IngredientWhereInput;
};
/**
 * RecipeCountOutputType without action
 */
export type RecipeCountOutputTypeCountStepsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StepWhereInput;
};
/**
 * RecipeCountOutputType without action
 */
export type RecipeCountOutputTypeCountSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecipeSubmissionWhereInput;
};
export type RecipeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    category?: boolean;
    difficulty?: boolean;
    source?: boolean;
    externalId?: boolean;
    cachedAt?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.Recipe$userArgs<ExtArgs>;
    ingredients?: boolean | Prisma.Recipe$ingredientsArgs<ExtArgs>;
    steps?: boolean | Prisma.Recipe$stepsArgs<ExtArgs>;
    submissions?: boolean | Prisma.Recipe$submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecipeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recipe"]>;
export type RecipeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    category?: boolean;
    difficulty?: boolean;
    source?: boolean;
    externalId?: boolean;
    cachedAt?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.Recipe$userArgs<ExtArgs>;
}, ExtArgs["result"]["recipe"]>;
export type RecipeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    category?: boolean;
    difficulty?: boolean;
    source?: boolean;
    externalId?: boolean;
    cachedAt?: boolean;
    createdAt?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.Recipe$userArgs<ExtArgs>;
}, ExtArgs["result"]["recipe"]>;
export type RecipeSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    category?: boolean;
    difficulty?: boolean;
    source?: boolean;
    externalId?: boolean;
    cachedAt?: boolean;
    createdAt?: boolean;
    userId?: boolean;
};
export type RecipeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "category" | "difficulty" | "source" | "externalId" | "cachedAt" | "createdAt" | "userId", ExtArgs["result"]["recipe"]>;
export type RecipeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Recipe$userArgs<ExtArgs>;
    ingredients?: boolean | Prisma.Recipe$ingredientsArgs<ExtArgs>;
    steps?: boolean | Prisma.Recipe$stepsArgs<ExtArgs>;
    submissions?: boolean | Prisma.Recipe$submissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.RecipeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RecipeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Recipe$userArgs<ExtArgs>;
};
export type RecipeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.Recipe$userArgs<ExtArgs>;
};
export type $RecipePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Recipe";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
        ingredients: Prisma.$IngredientPayload<ExtArgs>[];
        steps: Prisma.$StepPayload<ExtArgs>[];
        submissions: Prisma.$RecipeSubmissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        imageUrl: string | null;
        category: string | null;
        difficulty: string | null;
        source: $Enums.RecipeSource;
        externalId: string | null;
        cachedAt: Date | null;
        createdAt: Date;
        userId: string | null;
    }, ExtArgs["result"]["recipe"]>;
    composites: {};
};
export type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RecipePayload, S>;
export type RecipeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RecipeCountAggregateInputType | true;
};
export interface RecipeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Recipe'];
        meta: {
            name: 'Recipe';
        };
    };
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: Prisma.SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: Prisma.SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     *
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RecipeFindManyArgs>(args?: Prisma.SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     *
     */
    create<T extends RecipeCreateArgs>(args: Prisma.SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecipeCreateManyArgs>(args?: Prisma.SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     *
     */
    delete<T extends RecipeDeleteArgs>(args: Prisma.SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecipeUpdateArgs>(args: Prisma.SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: Prisma.SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: Prisma.SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipeUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecipeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RecipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: Prisma.SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(args?: Prisma.Subset<T, RecipeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RecipeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Prisma.Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>;
    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RecipeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RecipeGroupByArgs['orderBy'];
    } : {
        orderBy?: RecipeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Recipe model
     */
    readonly fields: RecipeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Recipe.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.Recipe$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recipe$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ingredients<T extends Prisma.Recipe$ingredientsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recipe$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    steps<T extends Prisma.Recipe$stepsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recipe$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    submissions<T extends Prisma.Recipe$submissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Recipe$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecipeSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Recipe model
 */
export interface RecipeFieldRefs {
    readonly id: Prisma.FieldRef<"Recipe", 'String'>;
    readonly title: Prisma.FieldRef<"Recipe", 'String'>;
    readonly description: Prisma.FieldRef<"Recipe", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"Recipe", 'String'>;
    readonly category: Prisma.FieldRef<"Recipe", 'String'>;
    readonly difficulty: Prisma.FieldRef<"Recipe", 'String'>;
    readonly source: Prisma.FieldRef<"Recipe", 'RecipeSource'>;
    readonly externalId: Prisma.FieldRef<"Recipe", 'String'>;
    readonly cachedAt: Prisma.FieldRef<"Recipe", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Recipe", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"Recipe", 'String'>;
}
/**
 * Recipe findUnique
 */
export type RecipeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter, which Recipe to fetch.
     */
    where: Prisma.RecipeWhereUniqueInput;
};
/**
 * Recipe findUniqueOrThrow
 */
export type RecipeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter, which Recipe to fetch.
     */
    where: Prisma.RecipeWhereUniqueInput;
};
/**
 * Recipe findFirst
 */
export type RecipeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter, which Recipe to fetch.
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Recipes.
     */
    cursor?: Prisma.RecipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Recipes.
     */
    distinct?: Prisma.RecipeScalarFieldEnum | Prisma.RecipeScalarFieldEnum[];
};
/**
 * Recipe findFirstOrThrow
 */
export type RecipeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter, which Recipe to fetch.
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Recipes.
     */
    cursor?: Prisma.RecipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Recipes.
     */
    distinct?: Prisma.RecipeScalarFieldEnum | Prisma.RecipeScalarFieldEnum[];
};
/**
 * Recipe findMany
 */
export type RecipeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter, which Recipes to fetch.
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Prisma.RecipeOrderByWithRelationInput | Prisma.RecipeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Recipes.
     */
    cursor?: Prisma.RecipeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Recipes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Recipes.
     */
    distinct?: Prisma.RecipeScalarFieldEnum | Prisma.RecipeScalarFieldEnum[];
};
/**
 * Recipe create
 */
export type RecipeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * The data needed to create a Recipe.
     */
    data: Prisma.XOR<Prisma.RecipeCreateInput, Prisma.RecipeUncheckedCreateInput>;
};
/**
 * Recipe createMany
 */
export type RecipeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: Prisma.RecipeCreateManyInput | Prisma.RecipeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Recipe createManyAndReturn
 */
export type RecipeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * The data used to create many Recipes.
     */
    data: Prisma.RecipeCreateManyInput | Prisma.RecipeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Recipe update
 */
export type RecipeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * The data needed to update a Recipe.
     */
    data: Prisma.XOR<Prisma.RecipeUpdateInput, Prisma.RecipeUncheckedUpdateInput>;
    /**
     * Choose, which Recipe to update.
     */
    where: Prisma.RecipeWhereUniqueInput;
};
/**
 * Recipe updateMany
 */
export type RecipeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyInput>;
    /**
     * Filter which Recipes to update
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * Limit how many Recipes to update.
     */
    limit?: number;
};
/**
 * Recipe updateManyAndReturn
 */
export type RecipeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * The data used to update Recipes.
     */
    data: Prisma.XOR<Prisma.RecipeUpdateManyMutationInput, Prisma.RecipeUncheckedUpdateManyInput>;
    /**
     * Filter which Recipes to update
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * Limit how many Recipes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Recipe upsert
 */
export type RecipeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: Prisma.RecipeWhereUniqueInput;
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: Prisma.XOR<Prisma.RecipeCreateInput, Prisma.RecipeUncheckedCreateInput>;
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RecipeUpdateInput, Prisma.RecipeUncheckedUpdateInput>;
};
/**
 * Recipe delete
 */
export type RecipeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
    /**
     * Filter which Recipe to delete.
     */
    where: Prisma.RecipeWhereUniqueInput;
};
/**
 * Recipe deleteMany
 */
export type RecipeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: Prisma.RecipeWhereInput;
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number;
};
/**
 * Recipe.user
 */
export type Recipe$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * Recipe.ingredients
 */
export type Recipe$ingredientsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: Prisma.IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: Prisma.IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.IngredientInclude<ExtArgs> | null;
    where?: Prisma.IngredientWhereInput;
    orderBy?: Prisma.IngredientOrderByWithRelationInput | Prisma.IngredientOrderByWithRelationInput[];
    cursor?: Prisma.IngredientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IngredientScalarFieldEnum | Prisma.IngredientScalarFieldEnum[];
};
/**
 * Recipe.steps
 */
export type Recipe$stepsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: Prisma.StepSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Step
     */
    omit?: Prisma.StepOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StepInclude<ExtArgs> | null;
    where?: Prisma.StepWhereInput;
    orderBy?: Prisma.StepOrderByWithRelationInput | Prisma.StepOrderByWithRelationInput[];
    cursor?: Prisma.StepWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StepScalarFieldEnum | Prisma.StepScalarFieldEnum[];
};
/**
 * Recipe.submissions
 */
export type Recipe$submissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.RecipeSubmissionWhereInput;
    orderBy?: Prisma.RecipeSubmissionOrderByWithRelationInput | Prisma.RecipeSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.RecipeSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RecipeSubmissionScalarFieldEnum | Prisma.RecipeSubmissionScalarFieldEnum[];
};
/**
 * Recipe without action
 */
export type RecipeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: Prisma.RecipeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Recipe
     */
    omit?: Prisma.RecipeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecipeInclude<ExtArgs> | null;
};
//# sourceMappingURL=Recipe.d.ts.map