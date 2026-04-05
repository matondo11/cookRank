import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Step
 *
 */
export type StepModel = runtime.Types.Result.DefaultSelection<Prisma.$StepPayload>;
export type AggregateStep = {
    _count: StepCountAggregateOutputType | null;
    _avg: StepAvgAggregateOutputType | null;
    _sum: StepSumAggregateOutputType | null;
    _min: StepMinAggregateOutputType | null;
    _max: StepMaxAggregateOutputType | null;
};
export type StepAvgAggregateOutputType = {
    order: number | null;
};
export type StepSumAggregateOutputType = {
    order: number | null;
};
export type StepMinAggregateOutputType = {
    id: string | null;
    order: number | null;
    content: string | null;
    recipeId: string | null;
};
export type StepMaxAggregateOutputType = {
    id: string | null;
    order: number | null;
    content: string | null;
    recipeId: string | null;
};
export type StepCountAggregateOutputType = {
    id: number;
    order: number;
    content: number;
    recipeId: number;
    _all: number;
};
export type StepAvgAggregateInputType = {
    order?: true;
};
export type StepSumAggregateInputType = {
    order?: true;
};
export type StepMinAggregateInputType = {
    id?: true;
    order?: true;
    content?: true;
    recipeId?: true;
};
export type StepMaxAggregateInputType = {
    id?: true;
    order?: true;
    content?: true;
    recipeId?: true;
};
export type StepCountAggregateInputType = {
    id?: true;
    order?: true;
    content?: true;
    recipeId?: true;
    _all?: true;
};
export type StepAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: Prisma.StepWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Steps to fetch.
     */
    orderBy?: Prisma.StepOrderByWithRelationInput | Prisma.StepOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.StepWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Steps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: StepAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: StepSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType;
};
export type GetStepAggregateType<T extends StepAggregateArgs> = {
    [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStep[P]> : Prisma.GetScalarType<T[P], AggregateStep[P]>;
};
export type StepGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StepWhereInput;
    orderBy?: Prisma.StepOrderByWithAggregationInput | Prisma.StepOrderByWithAggregationInput[];
    by: Prisma.StepScalarFieldEnum[] | Prisma.StepScalarFieldEnum;
    having?: Prisma.StepScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StepCountAggregateInputType | true;
    _avg?: StepAvgAggregateInputType;
    _sum?: StepSumAggregateInputType;
    _min?: StepMinAggregateInputType;
    _max?: StepMaxAggregateInputType;
};
export type StepGroupByOutputType = {
    id: string;
    order: number;
    content: string;
    recipeId: string;
    _count: StepCountAggregateOutputType | null;
    _avg: StepAvgAggregateOutputType | null;
    _sum: StepSumAggregateOutputType | null;
    _min: StepMinAggregateOutputType | null;
    _max: StepMaxAggregateOutputType | null;
};
export type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StepGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StepGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StepGroupByOutputType[P]>;
}>>;
export type StepWhereInput = {
    AND?: Prisma.StepWhereInput | Prisma.StepWhereInput[];
    OR?: Prisma.StepWhereInput[];
    NOT?: Prisma.StepWhereInput | Prisma.StepWhereInput[];
    id?: Prisma.StringFilter<"Step"> | string;
    order?: Prisma.IntFilter<"Step"> | number;
    content?: Prisma.StringFilter<"Step"> | string;
    recipeId?: Prisma.StringFilter<"Step"> | string;
    recipe?: Prisma.XOR<Prisma.RecipeScalarRelationFilter, Prisma.RecipeWhereInput>;
};
export type StepOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    recipeId?: Prisma.SortOrder;
    recipe?: Prisma.RecipeOrderByWithRelationInput;
};
export type StepWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    recipeId_order?: Prisma.StepRecipeIdOrderCompoundUniqueInput;
    AND?: Prisma.StepWhereInput | Prisma.StepWhereInput[];
    OR?: Prisma.StepWhereInput[];
    NOT?: Prisma.StepWhereInput | Prisma.StepWhereInput[];
    order?: Prisma.IntFilter<"Step"> | number;
    content?: Prisma.StringFilter<"Step"> | string;
    recipeId?: Prisma.StringFilter<"Step"> | string;
    recipe?: Prisma.XOR<Prisma.RecipeScalarRelationFilter, Prisma.RecipeWhereInput>;
}, "id" | "recipeId_order">;
export type StepOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    recipeId?: Prisma.SortOrder;
    _count?: Prisma.StepCountOrderByAggregateInput;
    _avg?: Prisma.StepAvgOrderByAggregateInput;
    _max?: Prisma.StepMaxOrderByAggregateInput;
    _min?: Prisma.StepMinOrderByAggregateInput;
    _sum?: Prisma.StepSumOrderByAggregateInput;
};
export type StepScalarWhereWithAggregatesInput = {
    AND?: Prisma.StepScalarWhereWithAggregatesInput | Prisma.StepScalarWhereWithAggregatesInput[];
    OR?: Prisma.StepScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StepScalarWhereWithAggregatesInput | Prisma.StepScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Step"> | string;
    order?: Prisma.IntWithAggregatesFilter<"Step"> | number;
    content?: Prisma.StringWithAggregatesFilter<"Step"> | string;
    recipeId?: Prisma.StringWithAggregatesFilter<"Step"> | string;
};
export type StepCreateInput = {
    id?: string;
    order: number;
    content: string;
    recipe: Prisma.RecipeCreateNestedOneWithoutStepsInput;
};
export type StepUncheckedCreateInput = {
    id?: string;
    order: number;
    content: string;
    recipeId: string;
};
export type StepUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    recipe?: Prisma.RecipeUpdateOneRequiredWithoutStepsNestedInput;
};
export type StepUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StepCreateManyInput = {
    id?: string;
    order: number;
    content: string;
    recipeId: string;
};
export type StepUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StepUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    recipeId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StepListRelationFilter = {
    every?: Prisma.StepWhereInput;
    some?: Prisma.StepWhereInput;
    none?: Prisma.StepWhereInput;
};
export type StepOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StepRecipeIdOrderCompoundUniqueInput = {
    recipeId: string;
    order: number;
};
export type StepCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    recipeId?: Prisma.SortOrder;
};
export type StepAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type StepMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    recipeId?: Prisma.SortOrder;
};
export type StepMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    recipeId?: Prisma.SortOrder;
};
export type StepSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type StepCreateNestedManyWithoutRecipeInput = {
    create?: Prisma.XOR<Prisma.StepCreateWithoutRecipeInput, Prisma.StepUncheckedCreateWithoutRecipeInput> | Prisma.StepCreateWithoutRecipeInput[] | Prisma.StepUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: Prisma.StepCreateOrConnectWithoutRecipeInput | Prisma.StepCreateOrConnectWithoutRecipeInput[];
    createMany?: Prisma.StepCreateManyRecipeInputEnvelope;
    connect?: Prisma.StepWhereUniqueInput | Prisma.StepWhereUniqueInput[];
};
export type StepUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: Prisma.XOR<Prisma.StepCreateWithoutRecipeInput, Prisma.StepUncheckedCreateWithoutRecipeInput> | Prisma.StepCreateWithoutRecipeInput[] | Prisma.StepUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: Prisma.StepCreateOrConnectWithoutRecipeInput | Prisma.StepCreateOrConnectWithoutRecipeInput[];
    createMany?: Prisma.StepCreateManyRecipeInputEnvelope;
    connect?: Prisma.StepWhereUniqueInput | Prisma.StepWhereUniqueInput[];
};
export type StepUpdateManyWithoutRecipeNestedInput = {
    create?: Prisma.XOR<Prisma.StepCreateWithoutRecipeInput, Prisma.StepUncheckedCreateWithoutRecipeInput> | Prisma.StepCreateWithoutRecipeInput[] | Prisma.StepUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: Prisma.StepCreateOrConnectWithoutRecipeInput | Prisma.StepCreateOrConnectWithoutRecipeInput[];
    upsert?: Prisma.StepUpsertWithWhereUniqueWithoutRecipeInput | Prisma.StepUpsertWithWhereUniqueWithoutRecipeInput[];
    createMany?: Prisma.StepCreateManyRecipeInputEnvelope;
    set?: Prisma.StepWhereUniqueInput | Prisma.StepWhereUniqueInput[];
    disconnect?: Prisma.StepWhereUniqueInput | Prisma.StepWhereUniqueInput[];
    delete?: Prisma.StepWhereUniqueInput | Prisma.StepWhereUniqueInput[];
    connect?: Prisma.StepWhereUniqueInput | Prisma.StepWhereUniqueInput[];
    update?: Prisma.StepUpdateWithWhereUniqueWithoutRecipeInput | Prisma.StepUpdateWithWhereUniqueWithoutRecipeInput[];
    updateMany?: Prisma.StepUpdateManyWithWhereWithoutRecipeInput | Prisma.StepUpdateManyWithWhereWithoutRecipeInput[];
    deleteMany?: Prisma.StepScalarWhereInput | Prisma.StepScalarWhereInput[];
};
export type StepUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: Prisma.XOR<Prisma.StepCreateWithoutRecipeInput, Prisma.StepUncheckedCreateWithoutRecipeInput> | Prisma.StepCreateWithoutRecipeInput[] | Prisma.StepUncheckedCreateWithoutRecipeInput[];
    connectOrCreate?: Prisma.StepCreateOrConnectWithoutRecipeInput | Prisma.StepCreateOrConnectWithoutRecipeInput[];
    upsert?: Prisma.StepUpsertWithWhereUniqueWithoutRecipeInput | Prisma.StepUpsertWithWhereUniqueWithoutRecipeInput[];
    createMany?: Prisma.StepCreateManyRecipeInputEnvelope;
    set?: Prisma.StepWhereUniqueInput | Prisma.StepWhereUniqueInput[];
    disconnect?: Prisma.StepWhereUniqueInput | Prisma.StepWhereUniqueInput[];
    delete?: Prisma.StepWhereUniqueInput | Prisma.StepWhereUniqueInput[];
    connect?: Prisma.StepWhereUniqueInput | Prisma.StepWhereUniqueInput[];
    update?: Prisma.StepUpdateWithWhereUniqueWithoutRecipeInput | Prisma.StepUpdateWithWhereUniqueWithoutRecipeInput[];
    updateMany?: Prisma.StepUpdateManyWithWhereWithoutRecipeInput | Prisma.StepUpdateManyWithWhereWithoutRecipeInput[];
    deleteMany?: Prisma.StepScalarWhereInput | Prisma.StepScalarWhereInput[];
};
export type StepCreateWithoutRecipeInput = {
    id?: string;
    order: number;
    content: string;
};
export type StepUncheckedCreateWithoutRecipeInput = {
    id?: string;
    order: number;
    content: string;
};
export type StepCreateOrConnectWithoutRecipeInput = {
    where: Prisma.StepWhereUniqueInput;
    create: Prisma.XOR<Prisma.StepCreateWithoutRecipeInput, Prisma.StepUncheckedCreateWithoutRecipeInput>;
};
export type StepCreateManyRecipeInputEnvelope = {
    data: Prisma.StepCreateManyRecipeInput | Prisma.StepCreateManyRecipeInput[];
    skipDuplicates?: boolean;
};
export type StepUpsertWithWhereUniqueWithoutRecipeInput = {
    where: Prisma.StepWhereUniqueInput;
    update: Prisma.XOR<Prisma.StepUpdateWithoutRecipeInput, Prisma.StepUncheckedUpdateWithoutRecipeInput>;
    create: Prisma.XOR<Prisma.StepCreateWithoutRecipeInput, Prisma.StepUncheckedCreateWithoutRecipeInput>;
};
export type StepUpdateWithWhereUniqueWithoutRecipeInput = {
    where: Prisma.StepWhereUniqueInput;
    data: Prisma.XOR<Prisma.StepUpdateWithoutRecipeInput, Prisma.StepUncheckedUpdateWithoutRecipeInput>;
};
export type StepUpdateManyWithWhereWithoutRecipeInput = {
    where: Prisma.StepScalarWhereInput;
    data: Prisma.XOR<Prisma.StepUpdateManyMutationInput, Prisma.StepUncheckedUpdateManyWithoutRecipeInput>;
};
export type StepScalarWhereInput = {
    AND?: Prisma.StepScalarWhereInput | Prisma.StepScalarWhereInput[];
    OR?: Prisma.StepScalarWhereInput[];
    NOT?: Prisma.StepScalarWhereInput | Prisma.StepScalarWhereInput[];
    id?: Prisma.StringFilter<"Step"> | string;
    order?: Prisma.IntFilter<"Step"> | number;
    content?: Prisma.StringFilter<"Step"> | string;
    recipeId?: Prisma.StringFilter<"Step"> | string;
};
export type StepCreateManyRecipeInput = {
    id?: string;
    order: number;
    content: string;
};
export type StepUpdateWithoutRecipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StepUncheckedUpdateWithoutRecipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StepUncheckedUpdateManyWithoutRecipeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type StepSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order?: boolean;
    content?: boolean;
    recipeId?: boolean;
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["step"]>;
export type StepSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order?: boolean;
    content?: boolean;
    recipeId?: boolean;
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["step"]>;
export type StepSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    order?: boolean;
    content?: boolean;
    recipeId?: boolean;
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["step"]>;
export type StepSelectScalar = {
    id?: boolean;
    order?: boolean;
    content?: boolean;
    recipeId?: boolean;
};
export type StepOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "order" | "content" | "recipeId", ExtArgs["result"]["step"]>;
export type StepInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
};
export type StepIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
};
export type StepIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    recipe?: boolean | Prisma.RecipeDefaultArgs<ExtArgs>;
};
export type $StepPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Step";
    objects: {
        recipe: Prisma.$RecipePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        order: number;
        content: string;
        recipeId: string;
    }, ExtArgs["result"]["step"]>;
    composites: {};
};
export type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StepPayload, S>;
export type StepCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StepCountAggregateInputType | true;
};
export interface StepDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Step'];
        meta: {
            name: 'Step';
        };
    };
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepFindUniqueArgs>(args: Prisma.SelectSubset<T, StepFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StepClient<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StepClient<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepFindFirstArgs>(args?: Prisma.SelectSubset<T, StepFindFirstArgs<ExtArgs>>): Prisma.Prisma__StepClient<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StepClient<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     *
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const stepWithIdOnly = await prisma.step.findMany({ select: { id: true } })
     *
     */
    findMany<T extends StepFindManyArgs>(args?: Prisma.SelectSubset<T, StepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     *
     */
    create<T extends StepCreateArgs>(args: Prisma.SelectSubset<T, StepCreateArgs<ExtArgs>>): Prisma.Prisma__StepClient<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Steps.
     * @param {StepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends StepCreateManyArgs>(args?: Prisma.SelectSubset<T, StepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Steps and returns the data saved in the database.
     * @param {StepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends StepCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     *
     */
    delete<T extends StepDeleteArgs>(args: Prisma.SelectSubset<T, StepDeleteArgs<ExtArgs>>): Prisma.Prisma__StepClient<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends StepUpdateArgs>(args: Prisma.SelectSubset<T, StepUpdateArgs<ExtArgs>>): Prisma.Prisma__StepClient<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends StepDeleteManyArgs>(args?: Prisma.SelectSubset<T, StepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends StepUpdateManyArgs>(args: Prisma.SelectSubset<T, StepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Steps and returns the data updated in the database.
     * @param {StepUpdateManyAndReturnArgs} args - Arguments to update many Steps.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Steps and only return the `id`
     * const stepWithIdOnly = await prisma.step.updateManyAndReturn({
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
    updateManyAndReturn<T extends StepUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
     */
    upsert<T extends StepUpsertArgs>(args: Prisma.SelectSubset<T, StepUpsertArgs<ExtArgs>>): Prisma.Prisma__StepClient<runtime.Types.Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(args?: Prisma.Subset<T, StepCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StepCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StepAggregateArgs>(args: Prisma.Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>;
    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
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
    groupBy<T extends StepGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StepGroupByArgs['orderBy'];
    } : {
        orderBy?: StepGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Step model
     */
    readonly fields: StepFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Step.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__StepClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    recipe<T extends Prisma.RecipeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RecipeDefaultArgs<ExtArgs>>): Prisma.Prisma__RecipeClient<runtime.Types.Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Step model
 */
export interface StepFieldRefs {
    readonly id: Prisma.FieldRef<"Step", 'String'>;
    readonly order: Prisma.FieldRef<"Step", 'Int'>;
    readonly content: Prisma.FieldRef<"Step", 'String'>;
    readonly recipeId: Prisma.FieldRef<"Step", 'String'>;
}
/**
 * Step findUnique
 */
export type StepFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Step to fetch.
     */
    where: Prisma.StepWhereUniqueInput;
};
/**
 * Step findUniqueOrThrow
 */
export type StepFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Step to fetch.
     */
    where: Prisma.StepWhereUniqueInput;
};
/**
 * Step findFirst
 */
export type StepFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Step to fetch.
     */
    where?: Prisma.StepWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Steps to fetch.
     */
    orderBy?: Prisma.StepOrderByWithRelationInput | Prisma.StepOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Steps.
     */
    cursor?: Prisma.StepWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Steps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Steps.
     */
    distinct?: Prisma.StepScalarFieldEnum | Prisma.StepScalarFieldEnum[];
};
/**
 * Step findFirstOrThrow
 */
export type StepFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Step to fetch.
     */
    where?: Prisma.StepWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Steps to fetch.
     */
    orderBy?: Prisma.StepOrderByWithRelationInput | Prisma.StepOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Steps.
     */
    cursor?: Prisma.StepWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Steps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Steps.
     */
    distinct?: Prisma.StepScalarFieldEnum | Prisma.StepScalarFieldEnum[];
};
/**
 * Step findMany
 */
export type StepFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Steps to fetch.
     */
    where?: Prisma.StepWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Steps to fetch.
     */
    orderBy?: Prisma.StepOrderByWithRelationInput | Prisma.StepOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Steps.
     */
    cursor?: Prisma.StepWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Steps.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Steps.
     */
    distinct?: Prisma.StepScalarFieldEnum | Prisma.StepScalarFieldEnum[];
};
/**
 * Step create
 */
export type StepCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Step.
     */
    data: Prisma.XOR<Prisma.StepCreateInput, Prisma.StepUncheckedCreateInput>;
};
/**
 * Step createMany
 */
export type StepCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: Prisma.StepCreateManyInput | Prisma.StepCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Step createManyAndReturn
 */
export type StepCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: Prisma.StepSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Step
     */
    omit?: Prisma.StepOmit<ExtArgs> | null;
    /**
     * The data used to create many Steps.
     */
    data: Prisma.StepCreateManyInput | Prisma.StepCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StepIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Step update
 */
export type StepUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Step.
     */
    data: Prisma.XOR<Prisma.StepUpdateInput, Prisma.StepUncheckedUpdateInput>;
    /**
     * Choose, which Step to update.
     */
    where: Prisma.StepWhereUniqueInput;
};
/**
 * Step updateMany
 */
export type StepUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: Prisma.XOR<Prisma.StepUpdateManyMutationInput, Prisma.StepUncheckedUpdateManyInput>;
    /**
     * Filter which Steps to update
     */
    where?: Prisma.StepWhereInput;
    /**
     * Limit how many Steps to update.
     */
    limit?: number;
};
/**
 * Step updateManyAndReturn
 */
export type StepUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: Prisma.StepSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Step
     */
    omit?: Prisma.StepOmit<ExtArgs> | null;
    /**
     * The data used to update Steps.
     */
    data: Prisma.XOR<Prisma.StepUpdateManyMutationInput, Prisma.StepUncheckedUpdateManyInput>;
    /**
     * Filter which Steps to update
     */
    where?: Prisma.StepWhereInput;
    /**
     * Limit how many Steps to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.StepIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Step upsert
 */
export type StepUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: Prisma.StepWhereUniqueInput;
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: Prisma.XOR<Prisma.StepCreateInput, Prisma.StepUncheckedCreateInput>;
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.StepUpdateInput, Prisma.StepUncheckedUpdateInput>;
};
/**
 * Step delete
 */
export type StepDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Step to delete.
     */
    where: Prisma.StepWhereUniqueInput;
};
/**
 * Step deleteMany
 */
export type StepDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: Prisma.StepWhereInput;
    /**
     * Limit how many Steps to delete.
     */
    limit?: number;
};
/**
 * Step without action
 */
export type StepDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Step.d.ts.map